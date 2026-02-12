import React, { useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import {
  Hand,
  HelpingHand,
  Cpu,
  Scan,
  Globe2,
  BrainCircuit,
  Sparkles,
  Waves,
  MessageCircle,
  Camera,
  Mic,
  Eye,
} from "lucide-react";

const ITEMS = [
  { id: 1, icon: Hand, label: "ISL Gesture" },
  { id: 2, icon: HelpingHand, label: "Hand Shape" },
  { id: 3, icon: Cpu, label: "Neural Core" },
  { id: 4, icon: Scan, label: "Landmark Scan" },
  { id: 5, icon: Globe2, label: "Global Access" },
  { id: 6, icon: BrainCircuit, label: "LSTM Memory" },
  { id: 7, icon: Sparkles, label: "Real‑Time" },
  { id: 8, icon: Waves, label: "Signal Flow" },
  { id: 9, icon: MessageCircle, label: "Dialogue" },
  { id: 10, icon: Camera, label: "Camera In" },
  { id: 11, icon: Mic, label: "Voice Out" },
  { id: 12, icon: Eye, label: "Seen Clearly" },
];

const RADIUS = 230; // distance from center
const VERTICAL_GAP = 90; // vertical distance between items
const SPIRAL_HEIGHT = ITEMS.length * VERTICAL_GAP; // height of one full loop
const SCROLL_SPEED = 12; // px per second (slow, smooth)
const AUTO_ROTATE_SPEED = 12; // degrees per second

export default function SignCylinder({ className = "" }) {
  const [offset, setOffset] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const rotateY = useMotionValue(0);

  // Drive continuous auto-scroll & rotation when not interacting.
  useAnimationFrame((t, delta) => {
    if (isInteracting) return;
    const dt = delta / 1000; // seconds
    setOffset((prev) => prev + dt * SCROLL_SPEED);
    rotateY.set(rotateY.get() + dt * AUTO_ROTATE_SPEED);
  });

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1200px", background: "transparent" }}
    >
      {/* 3D rotating helix with upward spiral and slightly tilted axis */}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateY,
          rotateX: 10,
          rotateZ: -6,
        }}
        className="relative h-full w-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onHoverStart={() => setIsInteracting(true)}
        onHoverEnd={() => setIsInteracting(false)}
        onDragStart={() => setIsInteracting(true)}
        onDragEnd={() => setIsInteracting(false)}
        onDrag={(event, info) => {
          // Map horizontal drag distance to rotation degrees
          rotateY.set(rotateY.get() + info.delta.x * 0.4);
        }}
      >
        {ITEMS.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / ITEMS.length) * 360;

          // Base vertical position for this item in the spiral
          const baseY = index * VERTICAL_GAP;

          // Apply continuous upward offset; wrap using modulo so items re-enter from bottom
          let currentY = (baseY - offset) % SPIRAL_HEIGHT;
          if (currentY < 0) currentY += SPIRAL_HEIGHT;

          // Center the spiral vertically around the middle of the container
          const y = currentY - SPIRAL_HEIGHT / 2;

          return (
            <div
              key={item.id}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center gap-1.5"
              style={{
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${RADIUS}px)
                  translateY(${y}px)
                `,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex min-w-[230px] max-w-[260px] flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-b from-cyan-500/16 via-violet-500/12 to-transparent px-5 py-3 backdrop-blur-xl border-y border-cyan-200/35 shadow-[0_0_26px_rgba(56,189,248,0.35)]">
                <Icon className="h-11 w-11 md:h-14 md:w-14 text-white/90 drop-shadow-[0_0_18px_rgba(15,23,42,0.75)]" />
                <span className="text-[11px] md:text-xs text-cyan-200 drop-shadow-[0_0_14px_rgba(34,211,238,0.9)] tracking-[0.24em] uppercase">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

