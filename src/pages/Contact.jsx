import { motion } from "motion/react";
import Navbar from "../components/Navbar";
// Place your \"We are here\" map image at src/assets/we-are-here-map.png
import mapImg from "../assets/we-are-here-map.png";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 pb-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-center">
          {/* Connect with us cards */}
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="mb-5">
              <p className="text-xs tracking-[0.35em] text-cyan-400/80 uppercase mb-2">
                Connect with Us
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                A message away from{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  being heard.
                </span>
              </h1>
              <p className="mt-3 text-sm text-white/65 max-w-md">
                Reach out directly—no forms, no friction. Choose the path that
                feels easiest for you.
              </p>
            </div>

            <div className="grid gap-4 md:gap-5 md:grid-cols-2">
              {/* Email support */}
              <a
                href="mailto:krrish.bajage@somaiya.edu"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/40">
                    <Mail className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/90">
                      Email Support
                    </p>
                    <p className="text-sm font-semibold">Email Us Directly</p>
                  </div>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">
                  Open your mail app with one click and send us your story,
                  question, or idea.
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/krrish-bajage-b09481330"
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.7)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 border border-sky-400/50">
                    <Linkedin className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-sky-300/90">
                      Professional Connect
                    </p>
                    <p className="text-sm font-semibold">Connect on LinkedIn</p>
                  </div>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">
                  Follow the journey, share feedback, or start a collaboration
                  on LinkedIn.
                </p>
              </a>
            </div>
          </motion.section>

          {/* Map visual */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/15 to-sky-500/10 blur-3xl" />
            <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-gradient-to-b from-white/5 via-black/60 to-black/90 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,1)]">
              <img
                src={mapImg}
                alt="Map showing where we are"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/80 px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-white/85 border border-white/20 shadow-lg shadow-black/60">
                We are here to listen
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

