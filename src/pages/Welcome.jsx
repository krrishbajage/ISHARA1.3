// import { useNavigate } from "react-router-dom";
// import user from "../assets/sign.png";

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#050b1e] to-[#0a1335] text-white flex flex-col items-center justify-center">
      
//       <h1 className="text-6xl font-serif mb-4">Ishaara</h1>
//       <p className="tracking-widest text-cyan-400 mb-8">BRIDGING WORLDS</p>

//       <button
//         onClick={() => navigate("/translate")}
//         className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
//       >
//         Get Started
//       </button>

//       {/* Team */}
//       <div className="mt-12 flex gap-6">
//         {[1, 2, 3, 4].map((i) => (
//           <div key={i} className="bg-white/10 p-4 rounded-xl text-center">
//             <img src={user} className="w-20 h-20 rounded-full mx-auto" />
//             <p className="mt-2 text-sm">Team Member</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

// Import team images from assets/credits
import nitin from "../assets/credits/NitinAgrawal.png";
import krrish from "../assets/credits/KrrishBajage.jpg";
import jay from "../assets/credits/jayDhandhukia.jpg";
import jitesh from "../assets/credits/jiteshKarale.jpg";
import {NoiseBackground} from "../components/ui/noise-background"
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#050b1e] to-[#0a1335] text-white flex flex-col items-center justify-center px-6">

      {/* Title */}
      <h1 className="text-4xl font-ishaara text-white tracking-wide">
    Ishara
  </h1>
      <p className="tracking-widest text-cyan-400 mb-10">
        BRIDGING WORLDS
      </p>

      {/* Get Started Button */}
      <NoiseBackground 
        containerClassName="w-fit p-2 rounded-full mx-auto"
        gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
        <button
          onClick={() => navigate("/translate")}
          className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
        >
        Get Started
        </button>
      </NoiseBackground>
      

      {/* Visionaries Section */}
      <p className="mt-16 mb-6 tracking-widest text-white/60">
        THE VISIONARIES
      </p>

      {/* Team Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        <TeamCard img={nitin} name="Nitin Agrawal" />
        <TeamCard img={krrish} name="Krrish Bajage" />
        <TeamCard img={jay} name="Jay Dhandhuki" />
        <TeamCard img={jitesh} name="Jitesh Karale" />
      </div>
    </div>
  );
}

/* Reusable Team Card Component */
function TeamCard({ img, name }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl w-44 text-center hover:scale-105 transition">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <p className="mt-3 text-sm">{name}</p>
    </div>
  );
}
