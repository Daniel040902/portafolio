import { useState, useEffect, useRef } from "react";
import useInView from "../hooks/useInView";

export default function SkillBar({ skill, index, isHovered, onHover }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.3);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (inView) setWidth(skill.level);
  }, [inView, skill.level]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: isHovered === skill.name ? "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))" : "rgba(255,255,255,0.03)",
        border: `1px solid ${isHovered === skill.name ? `${skill.color}40` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px",
        padding: "24px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered === skill.name ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div style={{
          width: "52px",
          height: "52px",
          borderRadius: "16px",
          background: skill.bg,
          border: `1px solid ${skill.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          transition: "all 0.3s ease",
          transform: isHovered === skill.name ? "scale(1.05)" : "scale(1)",
        }}>
          {skill.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{skill.name}</span>
            <span style={{ fontSize: "14px", fontWeight: 700, color: skill.color }}>{width}%</span>
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{skill.years}</div>
        </div>
      </div>
      <div style={{
        height: "6px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "3px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          borderRadius: "3px",
          background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
          width: `${width}%`,
          transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: `0 0 10px ${skill.color}80`,
        }} />
      </div>
    </div>
  );
}
