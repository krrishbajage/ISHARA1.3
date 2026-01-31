import { useNavigate } from "react-router-dom";
import { Vortex } from "../components/ui/vortex"; // Keep if you decide to switch back, otherwise unused
import { NoiseBackground } from "../components/ui/noise-background";
import { motion } from "motion/react";
import { ShineBorder } from "../components/ui/shine-border";
import { Globe } from "../components/ui/globe";
import nitin from "../assets/credits/NitinAgrawal.png";
import krrish from "../assets/credits/KrrishBajage.jpg";
import jay from "../assets/credits/jayDhandhukia.jpg";
import jitesh from "../assets/credits/jiteshKarale.jpg";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

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
            right-[-10%]
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
      <div className="absolute inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 md:pr-[500px]">
          
          {/* Logo & Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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
          </motion.div>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-20"
          >
            <NoiseBackground
              containerClassName="rounded-full p-[2px]"
              gradientColors={[
                "rgb(100, 200, 255)",
                "rgb(150, 100, 255)",
                "rgb(255, 100, 200)",
              ]}
              noiseIntensity={0.15}
              speed={0.08}
            >
              <button
                onClick={() => navigate("/translate")}
                className="px-10 py-4 rounded-full bg-black text-white font-medium text-lg
                           hover:bg-gray-900 transition-all duration-300 
                           shadow-lg hover:shadow-cyan-500/50
                           border border-cyan-400/30"
              >
                Get Started
              </button>
            </NoiseBackground>
          </motion.div>

          {/* Visionaries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-center pb-10"
          >
            <p className="mb-8 tracking-[0.2em] text-white/60 text-sm uppercase font-light">
              The Visionaries
            </p>
            <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
              <TeamCard img={nitin} name="Nitin Agrawal" delay={0.8} />
              <TeamCard img={krrish} name="Krrish Bajage" delay={0.9} />
              <TeamCard img={jay} name="Jay Dhandhuki" delay={1.0} />
              <TeamCard img={jitesh} name="Jitesh Karale" delay={1.1} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TeamCard({ img, name, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md 
                      p-6 rounded-2xl w-44 text-center
                      border border-white/10
                      hover:border-cyan-400/40
                      transition-all duration-300
                      shadow-lg hover:shadow-cyan-500/20">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden
                        ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60
                        transition-all duration-300">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cyan-400/10 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-sm font-medium text-white/90 group-hover:text-cyan-400 
                      transition-colors duration-300">
          {name}
        </p>
      </div>
    </motion.div>
  );
}