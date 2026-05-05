import { useRef } from "react";
import useInView from "../hooks/useInView";

export default function AnimSection({ children, className = "", delay = 0, threshold = 0.15 }) {
  const ref = useRef(null);
  const inView = useInView(ref, threshold);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
