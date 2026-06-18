import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimSection({ children, className = "", delay = 0, threshold = 0.15 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
