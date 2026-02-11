import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Keyboard,
  Send,
} from "lucide-react";
import { Ripple } from "../components/ui/Ripple";

import CameraBox from "../components/CameraBox";
import { Vortex } from "../components/ui/vortex";
import logo from "../assets/ishara-logo.png";

export default function Translate() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);

  // 👇 NEW: camera output choice
  // "text" | "voice" | null

  const navigate = useNavigate();

  const handleSend = () => {
    if (!inputText.trim()) return;

    setOutputText("Translated output from model...");
    setInputText("");
    setIsCameraOn(false);
    setIsMicOn(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white bg-black">
      <Vortex>
        <div className="relative z-10 flex flex-col h-full px-8 py-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-0">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-2xl overflow-hidden border border-cyan-400/40 bg-gradient-to-br from-cyan-500/40 via-purple-500/30 to-pink-500/30 shadow-lg shadow-cyan-500/40">
                <img
                  src={logo}
                  alt="Ishara logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-ishaara text-white tracking-wide">
                ISHARA
              </h1>
            </div>
            <button
              onClick={() => navigate("/thankyou")}
              className="flex items-center gap-2 bg-red-500/90 hover:bg-red-600 px-5 py-2 rounded-full"
            >
              ✕ Exit
            </button>
          </div>

          {/* Main Workspace */}
          <div className="flex-1 flex justify-center items-start pt-2">
          <div className="w-full max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col p-6">

              {/* 🔥 Shared Preview Window */}
              <div className="w-[700px] h-[480px] mx-auto rounded-xl bg-black/60 mb-2 flex items-center justify-center overflow-hidden relative">

                {/* CAMERA VIEW */}
                {isCameraOn && (
                  <>
                    <CameraBox />

                    {/* 👇 Camera Output Selection Overlay */}
                  </>
                )}

                {/* MIC VIEW */}
                {isMicOn && !isCameraOn && (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <Ripple
                      className="absolute inset-0 w-full text-violet-500"
                      mainCircleSize={180}
                      numCircles={8}
                      style={{ "--duration": "2.5s" }}
                    />
                    <div className="relative z-10 w-24 h-24 rounded-full 
                                    bg-cyan-500/20 backdrop-blur-md 
                                    border border-cyan-400/40 
                                    flex items-center justify-center shadow-xl">
                      <Mic className="w-10 h-10 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* IDLE */}
                {!isCameraOn && !isMicOn && (
                  <span className="text-gray-400 flex items-center gap-2">
                    <CameraOff size={20} /> Camera / Mic Off
                  </span>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">

                {/* Camera Button */}
                <button
                  onClick={() => {
                    setIsCameraOn((prev) => !prev);
                    setIsMicOn(false);
                  }}
                  className={`p-4 rounded-full border transition
                    ${
                      isCameraOn
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-400"
                        : "bg-black/40 border-white/20"
                    }`}
                >
                  {isCameraOn ? <Camera /> : <CameraOff />}
                </button>

                {/* Mic Button */}
                <button
                  onClick={() => {
                    setIsMicOn((prev) => !prev);
                    setIsCameraOn(false);
                  }}
                  className={`p-4 rounded-full border transition
                    ${
                      isMicOn
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-400"
                        : "bg-black/40 border-white/20"
                    }`}
                >
                  {isMicOn ? <Mic /> : <MicOff />}
                </button>

                {/* Input */}
                <div className="flex-1 flex items-center gap-2 bg-black/50 border border-cyan-400/30 rounded-full px-5">
                  <Keyboard size={18} className="text-gray-400" />
                  <input
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                      setIsCameraOn(false);
                      setIsMicOn(false);
                    }}
                    placeholder="Type to translate..."
                    className="flex-1 bg-transparent py-4 focus:outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Send */}
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="px-6 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-40 font-semibold flex items-center gap-2"
                >
                  <Send size={18} />
                  Send
                </button>

              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
