import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-[#050b1e] flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-serif mb-4">THANK YOU !</h1>
      <p className="mb-6 text-white/70">FOR USING ISHARA</p>

      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 rounded-full"
      >
        Return to Home
      </button>
    </div>
  );
}
