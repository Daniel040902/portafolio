import { motion } from "framer-motion";
import { navLinks } from "../../data/portfolioData";

export default function Navbar({ scrolled, activeNav, scrollTo }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1E1E3F]/80 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo("portafolio")}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[#59B8FF] via-[#A855F7] to-[#E84CB8] bg-[length:200%_200%] animate-gradient flex items-center justify-center text-lg font-extrabold text-white">
            JC
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-extrabold text-white tracking-tight">
              Josue <span className="text-[#59B8FF]">Castillo</span>
            </div>
            <div className="text-[11px] text-white/50 tracking-wider">
              Full Stack Developer
            </div>
          </div>
        </motion.button>

        <nav className="hidden md:flex gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-sm">
          {navLinks.map(({ id, label, icon }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                activeNav === id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeNav === id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#59B8FF]/20 to-[#A855F7]/20 border border-white/[0.08]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-xs">{icon}</span>
              <span className="relative z-10">{label}</span>
            </motion.button>
          ))}
        </nav>

        <nav className="flex md:hidden gap-1">
          {navLinks.map(({ id, icon }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className={`p-2.5 rounded-full text-sm transition-colors duration-200 ${
                activeNav === id
                  ? "bg-[#59B8FF]/20 text-white"
                  : "text-white/50"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <span>{icon}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
