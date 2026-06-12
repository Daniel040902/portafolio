import AnimSection from "../AnimSection";
import ProjectCard from "../ProjectCard";
import { projects, categories } from "../../data/portfolioData";

export default function ProjectsSection({ filterCategory, setFilterCategory }) {
  const filteredProjects =
    filterCategory === "todos"
      ? projects
      : filterCategory === "destacados"
        ? projects.filter(p => p.highlight)
        : projects.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <AnimSection className="projects-header">
          <div className="projects-badge">PORTAFOLIO</div>
          <h2 className="projects-title">
            Mis <span>mejores proyectos</span>
          </h2>
          <p className="projects-description">
            Trabajos recientes que reflejan mi pasión por el c&oacute;digo de calidad
          </p>
        </AnimSection>
        <AnimSection delay={100} className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`filter-button ${filterCategory === cat ? "active" : ""}`}
            >
              {cat === "todos" ? "📋 Todos" : cat === "destacados" ? "⭐ Destacados" : cat}
            </button>
          ))}
        </AnimSection>
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
