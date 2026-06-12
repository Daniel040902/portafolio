import AnimSection from "../AnimSection";
import SkillBar from "../SkillBar";
import { skills } from "../../data/portfolioData";

export default function SkillsSection({ hoveredSkill, onHover }) {
  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">
        <AnimSection className="skills-header">
          <div className="skills-badge">TECNOLOGÍAS</div>
          <h2 className="skills-title">
            Stack que <span>domino</span>
          </h2>
        </AnimSection>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={idx}
              isHovered={hoveredSkill}
              onHover={onHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
