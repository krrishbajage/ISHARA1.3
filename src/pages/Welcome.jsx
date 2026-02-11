import { useNavigate } from "react-router-dom";
import { Vortex } from "../components/ui/vortex"; // Keep if you decide to switch back, otherwise unused
import { NoiseBackground } from "../components/ui/noise-background";
import { motion } from "motion/react";
import { Globe } from "../components/ui/globe";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "../components/Navbar";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    // FIXED: Using min-h-screen ensures full viewport coverage
    // overflow-hidden prevents scrollbars while maintaining the background
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* Background Layer - Now properly fills the entire viewport */}
      <BackgroundBeamsWithCollision className="absolute inset-0 min-h-screen w-full bg-black z-0">
        
        {/* 🌍 Globe Layer */}
        {/* Adjusted positioning to ensure globe stays visible and properly positioned */}
        <div
          className="
            pointer-events-none
            absolute
            z-[1]
            top-[-20%]
            right-[-5%]
            w-[600px] md:w-[800px]
            h-[600px] md:h-[800px]
            opacity-50 
          "
        >
          {/* Glow effect behind globe */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-500/20
              blur-[100px] 
            "
          />
          <Globe className="w-full h-full " />
        </div>
      </BackgroundBeamsWithCollision>

      {/* Content Wrapper - properly sized to fill viewport */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-28 pb-12 md:pr-[500px]">
          
          {/* Logo & Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h1 className="text-6xl md:text-7xl font-ishaara text-white tracking-wide mb-3">
              ISHARA
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl tracking-[0.3em] text-cyan-400 font-light"
            >
              BRIDGING WORLDS
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-base md:text-lg text-neutral-300 max-w-lg mt-4 mb-8 leading-relaxed mx-auto"
            >
              Break the silence barrier with real-time AI. Translate Indian Sign
              Language to speech and text instantly—no special hardware
              required.
            </motion.p>
          </motion.div>

          {/* Get Started Button */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="mb-20"
>
  <NoiseBackground
    containerClassName="rounded-lg p-[1.5px]"
    gradientColors={[
      "rgb(200, 220, 255)",
      "rgb(200, 180, 255)",
      "rgb(220, 200, 255)",
    ]}
    noiseIntensity={0.12}
    speed={0.07}
  >
    <button
      onClick={() => navigate("/translate")}
      className="px-10 py-4 rounded-2xl bg-black text-white font-semibold text-base md:text-lg
                 hover:bg-gray-900 transition-all duration-300
                 tracking-wide"
    >
      Get Started
    </button>
  </NoiseBackground>
</motion.div>

        </div>
      </div>
    </div>
  );
}