import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-black text-white">
      {/* Soft glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-purple-500/25 blur-[120px]" />
        <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.35em] text-cyan-300/80 uppercase mb-3">
            Ishara
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Thank you for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              trusting Ishara
            </span>
            .
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto mt-3">
            Every gesture, word, and pause you shared here moves the world a
            little closer to feeling heard. We are grateful you chose Ishara to
            carry your voice.
          </p>
        </div>

        <div className="w-full max-w-md relative">
          {/* Glow behind card */}
          <div className="pointer-events-none absolute inset-0 translate-y-6 rounded-[32px] bg-cyan-500/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-2xl px-8 py-7 shadow-2xl shadow-cyan-500/30">
            <div className="absolute -top-6 left-8 h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/40">
              ✓
            </div>

            <div className="mt-2 space-y-2">
              <p className="text-sm font-medium text-white/90">
                This chapter with Ishara is gently closing.
              </p>
              <p className="text-xs text-white/60 leading-relaxed">
                Whenever you return, there will be new stories to tell, new
                expressions to explore, and new hearts to reach.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/")}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2.5 text-sm font-medium tracking-[0.16em] uppercase text-black shadow-lg shadow-cyan-500/50 transition hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]"
              >
                <span className="relative z-10">Return Home</span>
                {/* Shine bar */}
                <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/3 translate-x-[-100%] bg-gradient-to-r from-white/60 via-white/20 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-[260%] group-hover:opacity-100" />
              </button>
              <button
                onClick={() => navigate("/translate")}
                className="px-5 py-2.5 rounded-full border border-white/20 bg-black/50 text-xs md:text-sm tracking-[0.16em] uppercase text-white/80 hover:bg-white/5 transition"
              >
                Continue the Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
