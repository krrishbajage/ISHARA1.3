import { useEffect, useRef } from "react";

export default function CameraBox() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { exact: 700 },
          height: { exact: 480 },
          facingMode: "user"
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    startCamera();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-full h-full object-cover scale-x-[-1]"
    />
  );
}
