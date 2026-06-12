import AnimSection from "../AnimSection";
import { services } from "../../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <AnimSection className="about-header">
          <div className="about-badge">SOBRE MÍ</div>
          <h2 className="about-title">
            Apasionado por crear <span>soluciones innovadoras</span> que transforman negocios
          </h2>
          <p className="about-description">
            Con m&aacute;s de 3 a&ntilde;os de experiencia en desarrollo full stack, me especializo en
            crear aplicaciones web y m&oacute;viles escalables, eficientes y con una experiencia de usuario excepcional.
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
                <div className="service-features">
                  {service.features.map(f => (
                    <span key={f} className="service-feature" style={{ color: service.accent, background: `${service.accent}10` }}>
                      ✓ {f}
                    </span>
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
