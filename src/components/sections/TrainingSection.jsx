import AnimSection from "../AnimSection";
import { trainingData } from "../../data/portfolioData";

export default function TrainingSection() {
  return (
    <section id="trayectoria" className="training-section">
      <div className="training-container">
        <AnimSection className="training-header">
          <div className="training-badge">FORMACIÓN</div>
          <h2 className="training-title">
            Oferta <span>Académica y Laboral</span>
          </h2>
        </AnimSection>
        <div className="training-grid">
          {trainingData.map((item, idx) => (
            <AnimSection key={item.title} delay={idx * 100}>
              <div className={`training-card training-card--${item.type}`}>
                <div className="training-card-icon">{item.icon}</div>
                <div className="training-card-header">
                  <h3 className="training-card-title">{item.title}</h3>
                  <span className="training-card-subtitle">{item.subtitle}</span>
                  <span className="training-card-period">{item.period}</span>
                </div>
                <p className="training-card-desc">{item.description}</p>
                {item.highlights && (
                  <div className="training-card-highlights">
                    <h4 className="training-card-highlights-title">🔹 Funciones realizadas:</h4>
                    <ul className="training-card-highlights-list">
                      {item.highlights.map(h => (
                        <li key={h} className="training-card-highlights-item">• {h}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="training-card-tech">
                  {item.technologies.map(tech => (
                    <span key={tech} className="training-card-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
