import { useEffect, useRef } from "react";

export default function CameraBox() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <div className="w-full h-[300px] bg-black rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}
