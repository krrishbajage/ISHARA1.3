import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import logo from "../assets/ishara-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex w-full items-center justify-between px-8 py-3 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-2xl overflow-hidden border border-cyan-400/40 bg-gradient-to-br from-cyan-500/40 via-purple-500/30 to-pink-500/30 shadow-lg shadow-cyan-500/40">
            <img
              src={logo}
              alt="Ishara logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-ishaara tracking-[0.28em] uppercase text-white">
              Ishara
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-white/60 uppercase">
              Bridging Worlds
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6 text-[11px] md:text-xs tracking-[0.22em] uppercase">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === "/" && location.pathname === "");

            return (
              <div key={item.path} className="relative">
                <Link
                  to={item.path}
                  className={`pb-1 transition-colors ${
                    isActive
                      ? "text-cyan-300"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

