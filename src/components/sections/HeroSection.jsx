import AnimSection from "../AnimSection";
import { socialLinks } from "../../data/portfolioData";
import danielImg from "../../assets/daniel.png";

export default function HeroSection({ stats }) {
  return (
    <section id="portafolio" className="hero-section">
      <div className="hero-bg">
        <div className="hero-bg-circle1" />
        <div className="hero-bg-circle2" />
        <div className="hero-bg-dots" />
      </div>
      <div className="hero-container">
        <AnimSection>
          <div className="status-badge">
            <div className="status-dot" />
            <span className="status-text">DISPONIBLE PARA NUEVOS PROYECTOS</span>
          </div>
          <h1 className="hero-title">
            Desarrollador <span>Full Stack</span>
          </h1>
          <p className="hero-description">
            Desarrollo soluciones web y móviles modernas, escalables y eficientes
            utilizando <strong>React</strong>, <strong>Laravel</strong>, <strong>Node.js</strong> y bases de datos.
          </p>
          <div className="social-links">
            {socialLinks.map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className="social-link">
                {btn.icon} {btn.label}
              </a>
            ))}
          </div>
          <div className="stats-grid">
            {stats.map(stat => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimSection>
        <AnimSection delay={200}>
          <div className="hero-image-container">
            <div className="hero-image-bg" />
            <div className="hero-image-wrapper">
              <div className="hero-image-inner">
                <img
                  src={danielImg}
                  alt="Josue Castillo"
                  className="hero-image"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Josue+Castillo&background=3B82F6&color=fff&size=380";
                  }}
                />
              </div>
            </div>
            <div className="hero-badge2">
              <span className="hero-badge2-text">⚛️ React • 🔷 Laravel</span>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
