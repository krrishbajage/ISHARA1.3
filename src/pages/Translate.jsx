import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Keyboard,
  Send,
  FileText,
  Volume2,
} from "lucide-react";
import { Ripple } from "../components/ui/Ripple";

import CameraBox from "../components/CameraBox";
import OutputPanel from "../components/OutputPanel";
import { Vortex } from "../components/ui/vortex";

export default function Translate() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);

  // 👇 NEW: camera output choice
  // "text" | "voice" | null
  const [cameraOutputType, setCameraOutputType] = useState(null);

  const navigate = useNavigate();

  const handleSend = () => {
    if (!inputText.trim()) return;

    setOutputText("Translated output from model...");
    setInputText("");
    setIsCameraOn(false);
    setIsMicOn(false);
    setCameraOutputType(null);
  };

  return (
    <div className="relative w-screen min-h-screen overflow-hidden text-white">
      <Vortex>
        <div className="relative z-10 flex flex-col min-h-screen px-8 py-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-ishaara text-white tracking-wide">
    Ishara
  </h1>
            <button
              onClick={() => navigate("/thankyou")}
              className="flex items-center gap-2 bg-red-500/90 hover:bg-red-600 px-5 py-2 rounded-full"
            >
              ✕ Exit
            </button>
          </div>

          {/* Main Workspace */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col p-6">

              {/* 🔥 Shared Preview Window */}
              <div className="aspect-video w-full max-w-2xl mx-auto rounded-xl bg-black/60 mb-4 flex items-center justify-center overflow-hidden relative">

                {/* CAMERA VIEW */}
                {isCameraOn && (
                  <>
                    <CameraBox />

                    {/* 👇 Camera Output Selection Overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20 mt-8 ">
                     {/* text button */}
                     <div className="flex gap-3 bg-black/60 backdrop-blur-md  px-4 py-2 rounded-full border border-white/10 shadow-lg">
                      <button
                        onClick={() => setCameraOutputType("text")}
                        className={`px-5 py-2 rounded-full border backdrop-blur-md flex items-center gap-2 transition
                          ${
                            cameraOutputType === "text"
                              ? "bg-cyan-500/30 border-cyan-400 text-cyan-300"
                              : "bg-black/40 border-white/20 text-white"
                          }`}
                      >
                        <FileText size={18} />
                        Text
                      </button>

                      {/* Speech */}
                      <button
                        onClick={() => setCameraOutputType("voice")}
                        className={`px-5 py-2 rounded-full border backdrop-blur-md flex items-center gap-2 transition
                          ${
                            cameraOutputType === "voice"
                              ? "bg-cyan-500/30 border-cyan-400 text-cyan-300"
                              : "bg-black/40 border-white/20 text-white"
                          }`}
                      >
                        <Volume2 size={18} />
                        Speech
                      </button>
                     </div>
                    </div>
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

              {/* Output Panel */}
              <div className="w-full max-w-5xl mx-auto rounded-xl bg-white/5 border border-white/10 p-4 mb-4 h-[90px] overflow-y-auto no-scrollbar">
                <OutputPanel outputText={outputText} />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">

                {/* Camera Button */}
                <button
                  onClick={() => {
                    setIsCameraOn((prev) => !prev);
                    setIsMicOn(false);
                    setCameraOutputType(null);
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
                    setCameraOutputType(null);
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
                      setCameraOutputType(null);
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
