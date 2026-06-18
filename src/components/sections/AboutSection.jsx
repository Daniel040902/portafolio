import AnimSection from "../AnimSection";
import { services } from "../../data/portfolioData";

/**
 * AboutSection - Sección "Sobre mí"
 *
 * Muestra una breve descripción personal y una cuadrícula
 * de servicios ofrecidos con sus características.
 */
export default function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <AnimSection className="about-header">
          <div className="about-badge">SOBRE MÍ</div>
          <p className="about-description">
            Soy desarrollador Full Stack con conocimientos en React, Laravel, .NET, Node.js y PostgreSQL. Me enfoco en el desarrollo de aplicaciones web, APIs REST y sistemas empresariales.
          </p>
          <p className="about-description">
            Actualmente contin&uacute;o fortaleciendo mis habilidades mediante proyectos personales y profesionales orientados a crear soluciones eficientes, escalables y de calidad.
          </p>
        </AnimSection>
        <div className="services-grid">
          {services.map((service, idx) => (
            <AnimSection key={service.title} delay={idx * 100}>
              <div
                className="service-card"
                style={{ "--accent": service.accent }}
              >
                <div
                  className="service-icon"
                  style={{ background: `${service.accent}15`, borderColor: `${service.accent}40` }}
                >
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
