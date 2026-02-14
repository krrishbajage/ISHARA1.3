import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import nitin from "../assets/credits/NitinAgrawal.png";
import krrish from "../assets/credits/KrrishBajage.jpg";
import jay from "../assets/credits/jayDhandhukia.jpg";
import jitesh from "../assets/credits/jiteshKarale.jpg";
import Navbar from "../components/Navbar";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Camera, MessageCircle, Mic, Eye, Hand, BrainCircuit, Sparkles, Waves, Globe2, Scan, Cpu } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export default function About() {
  const team = [
    {
      id: 1,
      name: "Jay Dhandhuki",
      designation: "Backend Engineer & AI Architect",
      image: jay,
    },
    {
      id: 2,
      name: "Nitin Agrawal",
      designation: "Research & Frontend Developer",
      image: nitin,
    },
    {
      id: 3,
      name: "Krrish Bajage",
      designation: "Frontend & UI/UX Designer",
      image: krrish,
    },
    {
      id: 4,
      name: "Jitesh Karale",
      designation: "AI & ML Engineer",
      image: jitesh,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 min-h-screen w-full bg-black z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center px-6 py-10">
          {/* About section */}
          <section className="w-full max-w-6xl space-y-10">
              <div>
                <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase mb-3">
                  About Ishara
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  A bridge between{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    spoken language
                  </span>{" "}
                  and{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    sign language
                  </span>
                  .
                </h1>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
                  Ishara is designed to make communication more inclusive for the
                  deaf and hard-of-hearing community. By combining real‑time
                  translation, intuitive controls, and an immersive interface, we
                  aim to reduce the friction between different ways of
                  communicating.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* The North Star */}
                <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-fuchsia-500/60 via-purple-500/60 to-cyan-400/60 p-[1px] shadow-[0_0_60px_rgba(147,51,234,0.55)]">
                  <div className="relative h-full w-full rounded-[20px] bg-[#050013] px-6 py-5">
                    <div className="pointer-events-none absolute inset-x-6 -top-10 h-20 rounded-full bg-white/10 blur-2xl opacity-60" />
                    <h2 className="text-sm font-semibold mb-2">The North Star.</h2>
                    <p className="text-xs text-white/75 leading-relaxed">
                      A world where barriers dissolve into bridges.
                    </p>
                  </div>
                </div>

                {/* The Technology */}
                <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-purple-500/60 via-violet-500/60 to-pink-400/60 p-[1px] shadow-[0_0_60px_rgba(126,34,206,0.55)]">
                  <div className="relative h-full w-full rounded-[20px] bg-[#050013] px-6 py-5">
                    <div className="pointer-events-none absolute inset-x-6 -top-10 h-20 rounded-full bg-white/10 blur-2xl opacity-60" />
                    <h2 className="text-sm font-semibold mb-2">The Technology.</h2>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Translating silence into sound, and sound into sight.
                    </p>
                  </div>
                </div>

                {/* The Architects */}
                <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-sky-400/60 p-[1px] shadow-[0_0_60px_rgba(34,197,94,0.45)]">
                  <div className="relative h-full w-full rounded-[20px] bg-[#050013] px-6 py-5">
                    <div className="pointer-events-none absolute inset-x-6 -top-10 h-20 rounded-full bg-white/10 blur-2xl opacity-60" />
                    <h2 className="text-sm font-semibold mb-2">The Architects.</h2>
                    <p className="text-xs text-white/75 leading-relaxed">
                      Crafted by engineers driven by empathy, not just code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  Accessibility
                </span>
                <span className="px-3 py-1 rounded-full border border-purple-400/30 bg-purple-500/10 text-[11px] uppercase tracking-[0.18em] text-purple-200">
                  Real-time
                </span>
                <span className="px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
                  Human‑Centered
                </span>
              </div>
            </section>

          {/* Origin Story / Silent Barrier */}
          <section className="w-full max-w-6xl mt-16 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Text */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                The Silent Barrier
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Why We Built Ishara
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
                For millions, the world is a silent movie without subtitles. The deaf
                and hard-of-hearing community faces a daily invisible wall—reliance on
                human interpreters who are often costly or unavailable. Existing
                solutions demand too much: expensive sensor gloves, perfect lighting,
                or complex hardware. We believed communication should be free,
                frictionless, and accessible to anyone with a camera.
              </p>
            </div>

            {/* Orbiting circles illustration */}
            <div className="relative flex items-center justify-center h-[280px] md:h-[360px] w-full">
              {/* Outer glow - soft and subtle */}
              <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-br from-cyan-500/10 via-purple-500/8 to-sky-500/5 blur-3xl opacity-50 -z-10" />
              
              {/* Soft gradient backdrop behind center circle */}
              <div className="absolute inset-0 flex items-center justify-center -z-5">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-cyan-500/5 via-purple-500/10 to-transparent blur-2xl" />
              </div>
              
              {/* Center circle with text - softened edges */}
              <div className="relative z-10 h-40 w-40 md:h-52 md:w-52 rounded-full border border-white/5 flex items-center justify-center">
                {/* Soft inner glow instead of harsh background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0a0520]/90 via-[#0d0728]/95 to-[#050013]/100 backdrop-blur-sm" />
                
                {/* Inner rings for depth */}
                <div className="absolute inset-6 rounded-full border border-white/10" />
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-500/30 via-purple-500/25 to-sky-400/20 opacity-50 blur-xl" />
                
                {/* Text */}
                <span className="relative z-10 text-xs uppercase tracking-[0.2em] text-white/80 text-center px-2">
                  From Silence
                  <br />
                  To Connection
                </span>
              </div>

              {/* Inner ring - 4 icons */}
              <OrbitingCircles
                className="z-20"
                radius={90}
                duration={25}
                path={false}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm shadow-lg">
                  <Hand className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/40 backdrop-blur-sm shadow-lg">
                  <Mic className="h-5 w-5 text-purple-300" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-sm shadow-lg">
                  <Camera className="h-5 w-5 text-emerald-300" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 border border-sky-400/40 backdrop-blur-sm shadow-lg">
                  <MessageCircle className="h-5 w-5 text-sky-300" />
                </div>
              </OrbitingCircles>

              {/* Middle ring - 6 icons */}
              <OrbitingCircles
                className="z-20"
                radius={130}
                duration={35}
                reverse={true}
                path={false}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 border border-violet-400/40 backdrop-blur-sm shadow-lg">
                  <BrainCircuit className="h-4 w-4 text-violet-300" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/20 border border-pink-400/40 backdrop-blur-sm shadow-lg">
                  <Sparkles className="h-4 w-4 text-pink-300" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm shadow-lg">
                  <Waves className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/40 backdrop-blur-sm shadow-lg">
                  <Globe2 className="h-4 w-4 text-indigo-300" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 border border-teal-400/40 backdrop-blur-sm shadow-lg">
                  <Scan className="h-4 w-4 text-teal-300" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm shadow-lg">
                  <Cpu className="h-4 w-4 text-blue-300" />
                </div>
              </OrbitingCircles>

              {/* Outer ring - 8 icons */}
              <OrbitingCircles
                className="z-20"
                radius={170}
                duration={45}
                path={false}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-sm shadow-lg">
                  <Eye className="h-3.5 w-3.5 text-emerald-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/30 backdrop-blur-sm shadow-lg">
                  <Hand className="h-3.5 w-3.5 text-cyan-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/15 border border-purple-400/30 backdrop-blur-sm shadow-lg">
                  <Mic className="h-3.5 w-3.5 text-purple-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/15 border border-pink-400/30 backdrop-blur-sm shadow-lg">
                  <MessageCircle className="h-3.5 w-3.5 text-pink-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 border border-violet-400/30 backdrop-blur-sm shadow-lg">
                  <Camera className="h-3.5 w-3.5 text-violet-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-400/30 backdrop-blur-sm shadow-lg">
                  <BrainCircuit className="h-3.5 w-3.5 text-indigo-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 border border-sky-400/30 backdrop-blur-sm shadow-lg">
                  <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-400/30 backdrop-blur-sm shadow-lg">
                  <Waves className="h-3.5 w-3.5 text-teal-300" />
                </div>
              </OrbitingCircles>

              {/* Custom visible rings overlaid */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[15]" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="200" 
                  cy="200" 
                  r="90" 
                  fill="none" 
                  stroke="rgba(34, 211, 238, 0.3)" 
                  strokeWidth="1"
                  className="drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="130" 
                  fill="none" 
                  stroke="rgba(168, 85, 247, 0.25)" 
                  strokeWidth="1"
                  className="drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="170" 
                  fill="none" 
                  stroke="rgba(56, 189, 248, 0.2)" 
                  strokeWidth="1"
                  className="drop-shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                />
              </svg>
            </div>
            
          </section>

          {/* How It Works */}
          <section className="w-full max-w-6xl mt-16 space-y-8">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase">
                How It Works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Two directions. One bridge.
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-2xl md:max-w-3xl">
                Ishara listens to hands and voices at the same time, turning gestures
                into words—and words back into sign language—so both sides of the
                conversation feel seen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 - Seeing Silence */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-2xl p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/40">
                    <Camera className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.26em] uppercase text-cyan-300/90">
                      Seeing Silence
                    </p>
                    <h3 className="text-sm font-semibold">Sign → Text</h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  Using advanced MediaPipe landmark extraction, Ishara tracks hand
                  movements in real-time. Our custom LSTM (Long Short-Term Memory)
                  neural networks analyze the sequence of gestures—not just static
                  images—to understand the context of your movement.
                </p>
              </div>

              {/* Card 2 - Sign to Speech */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-2xl p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40">
                    <Mic className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.26em] uppercase text-emerald-300/90">
                      The Voice
                    </p>
                    <h3 className="text-sm font-semibold">Sign to Speech</h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  Breaks the silence by converting real-time hand gestures into spoken
                  audio and text, giving the deaf community a literal voice in daily
                  conversations.
                </p>
              </div>

              {/* Card 3 - Speaking Sign */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-2xl p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/15 border border-purple-400/40">
                    <MessageCircle className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.26em] uppercase text-purple-300/90">
                      Speaking Sign
                    </p>
                    <h3 className="text-sm font-semibold">Text → Sign</h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  Communication isn't a monologue. When you speak or type back, Ishara
                  instantly retrieves the correct sign language video from our
                  dedicated dataset, allowing non-signers to be "heard" visually.
                </p>
              </div>

              {/* Card 4 - Speech to Sign visuals */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-2xl p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 border border-sky-400/40">
                    <Eye className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.26em] uppercase text-sky-300/90">
                      The Visuals
                    </p>
                    <h3 className="text-sm font-semibold">Speech to Sign</h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  Closes the loop by instantly translating spoken words or typed text
                  into ISL video animations, ensuring the message is seen, not just
                  heard.
                </p>
              </div>
            </div>
          </section>

          {/* Visionaries section below */}
          <section className="w-full max-w-4xl mt-20 space-y-6 text-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-2">
                The Visionaries
              </p>
              <p className="text-sm text-white/60 max-w-xl mx-auto">
                Faces behind Ishara — orbiting the idea that communication
                should feel like light, not friction.
              </p>
            </div>

            <div className="flex justify-center">
              <AnimatedTooltip items={team} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}