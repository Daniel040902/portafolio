export default function SkillBar({ skill, isHovered, onHover }) {
  return (
    <div
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
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{skill.name}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{skill.years}</div>
        </div>
      </div>
    </div>
  );
}
