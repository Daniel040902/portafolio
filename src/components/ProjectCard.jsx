import { useState, useRef } from "react";
import useInView from "../hooks/useInView";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, 0.2);
  
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`,
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          border: `1px solid ${isHovered ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "24px",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered ? "0 25px 40px -12px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(5,5,8,0.95) 0%, transparent 50%)",
          }} />
          <div style={{ position: "absolute", top: "20px", left: "20px", display: "flex", gap: "12px" }}>
            <span style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(10px)",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.5px",
            }}>{project.category}</span>
            {project.highlight && (
              <span style={{
                background: "linear-gradient(135deg, #93C5FD, #8B5CF6)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#fff",
              }}>⭐ Destacado</span>
            )}
          </div>
          <div style={{ position: "absolute", bottom: "20px", right: "20px", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            {project.year}
          </div>
        </div>
        <div style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", marginBottom: "20px" }}>
            {project.desc}
          </p>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "8px", fontWeight: 600 }}>
              CARACTERÍSTICAS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.features.map(f => (
                <span key={f} style={{
                  fontSize: "11px",
                  color: "#93C5FD",
                  background: "rgba(59,130,246,0.1)",
                  padding: "4px 10px",
                  borderRadius: "12px",
                }}>✓ {f}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tech.map(tech => (
              <span key={tech} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 600,
                color: "#CBD5E1",
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
