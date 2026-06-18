import { motion } from "framer-motion";
import TechBackground from "../TechBackground";
import { socialLinks } from "../../data/portfolioData";
import danielImg from "../../assets/daniel.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function AnimatedStat({ label, value, suffix }) {
  return (
    <motion.div
      className="flex flex-col items-center py-4 px-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
      variants={itemVariants}
    >
      <motion.div
        className="stat-value"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {value}{suffix}
      </motion.div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

export default function HeroSection({ stats }) {
  return (
    <section
      id="portafolio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#1E1E3F" }}
    >
      <TechBackground />

      {/* Ambient edge lighting */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#59B8FF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#59B8FF]/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#A855F7]/20 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#59B8FF]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#A855F7]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[#59B8FF]/10 border border-[#59B8FF]/25 rounded-full px-5 py-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/50" />
              </span>
              <span className="text-xs font-bold text-[#59B8FF] tracking-wider">
                DISPONIBLE PARA NUEVOS PROYECTOS
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-[clamp(48px,6vw,80px)] font-black leading-[1.1] mb-7 tracking-[-2px]">
              Desarrollador{" "}
              <span className="gradient-shine">Full Stack</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-[#B8B8D0] max-w-[540px] mb-10">
              Desarrollador Full Stack especializado en <strong className="text-[#59B8FF]">React</strong>, <strong className="text-[#59B8FF]">Laravel</strong>, <strong className="text-[#59B8FF]">.NET</strong>, <strong className="text-[#59B8FF]">Node.js</strong> y <strong className="text-[#59B8FF]">PostgreSQL</strong>.
              <br /><br />
              Experiencia en el desarrollo de aplicaciones web, sistemas empresariales, APIs REST y soluciones escalables orientadas al rendimiento y la calidad del software.
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 mb-10 text-sm text-[#B8B8D0]">
              <span className="flex items-center gap-2">
                <span className="text-base">📍</span>
                León, Nicaragua
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🌎</span>
                Disponible para trabajo remoto
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
              {socialLinks.map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#59B8FF]/10 to-[#A855F7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 shadow-[0_0_20px_rgba(89,184,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{btn.icon}</span>
                  <span className="relative z-10">{btn.label}</span>
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN - Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 flex flex-col items-center gap-14"
          >
            {/* Photo */}
            <div className="relative -mt-16 lg:-mt-24">
              {/* Large radial glow behind photo */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-[#59B8FF]/15 blur-[80px]" />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#A855F7]/10 blur-[80px]" />

              {/* Animated border wrapper */}
              <div className="relative rounded-full p-[3px] animated-border-glow">
                <div className="bg-[#1E1E3F] p-[5px] rounded-full">
                  <img
                    src={danielImg}
                    alt="Josue Castillo"
                    className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Josue+Castillo&background=3B82F6&color=fff&size=380";
                    }}
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#A855F7]/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-xs font-semibold text-[#A78BFA]">
                  ⚛️ React • 🔷 Laravel
                </span>
              </motion.div>
            </div>

            {/* Stats below photo */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-[520px]"
            >
              {stats.map((stat) => (
                <AnimatedStat
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
