import { useState, useEffect, useCallback } from "react";
import useCounter from "../hooks/useCounter";
import AnimSection from "../components/AnimSection";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import "../css/Inicio.css";
import {
  skills,
  projects,
  services,
  navLinks,
  categories,
  contactInfo,
  socialLinks,
  statsData,
  experienceData,
  educationData,
} from "../data/portfolioData";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [filterCategory, setFilterCategory] = useState("todos");
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const projectCount = useCounter(statsData[0].value, 1500);
  const techCount = useCounter(statsData[1].value, 1500);
  const experienceYears = useCounter(statsData[2].value, 1500);
  const clientsCount = useCounter(statsData[3].value, 1500);

  const statsInViewActual = true;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["inicio", "sobre", "habilidades", "proyectos", "contacto"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setActiveNav(id);
    }
  }, []);

  const filteredProjects = filterCategory === "todos" 
    ? projects 
    : filterCategory === "destacados" 
      ? projects.filter(p => p.highlight)
      : projects.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());

  const stats = [
    { label: statsData[0].label, value: projectCount, suffix: statsData[0].suffix },
    { label: statsData[1].label, value: techCount, suffix: statsData[1].suffix },
    { label: statsData[2].label, value: experienceYears, suffix: statsData[2].suffix },
    { label: statsData[3].label, value: clientsCount, suffix: statsData[3].suffix },
  ];

  return (
    <div className="portfolio">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ========== NAVBAR ========== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <button 
            onClick={() => scrollTo("inicio")} 
            className="logo-button"
          >
            <div className="logo-avatar">
              JC
            </div>
            <div>
              <div className="logo-text">
                Josue <span>Castillo</span>
              </div>
              <div className="logo-subtitle">
                Full Stack Developer
              </div>
            </div>
          </button>

          <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            {navLinks.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-button ${activeNav === id ? 'active' : ''}`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </nav>

       
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section id="inicio" className="hero-section">
        <div className="hero-bg">
          <div className="hero-bg-circle1" />
          <div className="hero-bg-circle2" />
          <div className="hero-bg-dots" />
        </div>

        <div className="hero-container">
          <AnimSection>
            <div className="status-badge">
              <div className="status-dot" />
              <span className="status-text">
                DISPONIBLE PARA NUEVOS PROYECTOS
              </span>
            </div>

            <h1 className="hero-title">
              Desarrollador{" "}
              <span>Full Stack</span>
            </h1>

            <p className="hero-description">
              Desarrollo soluciones web y móviles modernas, escalables y eficientes utilizando <strong>React</strong>, <strong>Laravel</strong>, <strong>Node.js</strong> y bases de datos.
            </p>

            <div className="social-links">
              {socialLinks.map(btn => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {btn.icon} {btn.label}
                </a>
              ))}
            </div>

            <div className="stats-grid">
              {stats.map(stat => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value">
                    {statsInViewActual ? stat.value : 0}{stat.suffix}
                  </div>
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
  src={`${import.meta.env.BASE_URL}daniel.png`}
  alt="Josue Castillo"
  className="hero-image"
  onError={(e) => {
    e.target.src =
      "https://ui-avatars.com/api/?name=Josue+Castillo&background=3B82F6&color=fff&size=380";
  }}
/>
                </div>
              </div>

              <div className="hero-badge1">
                <div className="hero-badge1-content">
                  <div className="hero-badge1-dot" />
                  <span className="hero-badge1-text">Open to work</span>
                </div>
              </div>

              <div className="hero-badge2">
                <span className="hero-badge2-text">⚛️ React • 🔷 Laravel</span>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ========== SOBRE MÍ SECTION ========== */}
      <section id="sobre" className="about-section">
        <div className="about-container">
          <AnimSection className="about-header">
            <div className="about-badge">
              SOBRE MÍ
            </div>
            <h2 className="about-title">
              Apasionado por crear{" "}
              <span>
                soluciones innovadoras
              </span>{" "}
              que transforman negocios
            </h2>
            <p className="about-description">
              Con más de 3 años de experiencia en desarrollo full stack, me especializo en crear aplicaciones web y móviles escalables, eficientes y con una experiencia de usuario excepcional.
            </p>
          </AnimSection>

          <div className="services-grid">
            {services.map((service, idx) => (
              <AnimSection key={service.title} delay={idx * 100}>
                <div
                  className="service-card"
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = `${service.accent}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div className="service-icon" style={{ background: `${service.accent}15`, borderColor: `${service.accent}40` }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                  <p className="service-description">
                    {service.desc}
                  </p>
                  <div className="service-features">
                    {service.features.map(f => (
                      <span key={f} className="service-feature" style={{ color: service.accent, background: `${service.accent}10` }}>✓ {f}</span>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HABILIDADES SECTION ========== */}
      <section id="habilidades" className="skills-section">
        <div className="skills-container">
          <AnimSection className="skills-header">
            <div className="skills-badge">
              TECNOLOGÍAS
            </div>
            <h2 className="skills-title">
              Stack que{" "}
              <span>
                domino
              </span>
            </h2>
          </AnimSection>

          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={idx}
                isHovered={hoveredSkill}
                onHover={setHoveredSkill}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCIA SECTION ========== */}
      <section id="experiencia" className="experience-section">
        <div className="experience-container">
          <AnimSection className="experience-header">
            <div className="experience-badge">
              EXPERIENCIA
            </div>
            <h2 className="experience-title">
              Experiencia{" "}
              <span>
                Profesional
              </span>
            </h2>
          </AnimSection>

          <div className="experience-grid">
            {experienceData.map((exp, idx) => (
              <AnimSection key={exp.role} delay={idx * 100}>
                <div className="experience-card">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-period">{exp.period}</div>
                  <div className="experience-tech">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="experience-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="experience-desc">{exp.description}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FORMACIÓN SECTION ========== */}
      <section id="formacion" className="education-section">
        <div className="education-container">
          <AnimSection className="education-header">
            <div className="education-badge">
              FORMACIÓN
            </div>
            <h2 className="education-title">
              Formación{" "}
              <span>
                Académica
              </span>
            </h2>
          </AnimSection>

          <AnimSection delay={100}>
            <div className="education-card">
              <div className="education-meta">
                <span className="education-degree">{educationData.degree}</span>
                <span className="education-institution">{educationData.institution}</span>
                <span className="education-period">{educationData.period}</span>
              </div>
              <p className="education-desc">{educationData.description}</p>
              <div className="education-tech">
                {educationData.technologies.map(tech => (
                  <span key={tech} className="education-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ========== PROYECTOS SECTION ========== */}
      <section id="proyectos" className="projects-section">
        <div className="projects-container">
          <AnimSection className="projects-header">
            <div className="projects-badge">
              PORTAFOLIO
            </div>
            <h2 className="projects-title">
              Mis{" "}
              <span>
                mejores proyectos
              </span>
            </h2>
            <p className="projects-description">
              Trabajos recientes que reflejan mi pasión por el código de calidad
            </p>
          </AnimSection>

          <AnimSection delay={100} className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`filter-button ${filterCategory === cat ? 'active' : ''}`}
                onMouseEnter={e => {
                  if (filterCategory !== cat) {
                    e.target.style.background = "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={e => {
                  if (filterCategory !== cat) {
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }
                }}
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

      {/* ========== CONTACTO SECTION ========== */}
      <section id="contacto" className="contact-section">
        <div className="contact-bg">
          <div className="contact-bg-circle" />
        </div>

        <div className="contact-container">
          <AnimSection className="contact-header">
            <div className="contact-badge">
              CONTACTO
            </div>
            <h2 className="contact-title">
              ¿Tienes un{" "}
              <span>
                proyecto
              </span>{" "}
              en mente?
            </h2>
            <p className="contact-description">
              Hablemos y hagámoslo realidad juntos
            </p>
          </AnimSection>

          <div className="contact-grid">
            {contactInfo.map((contact, idx) => (
              <AnimSection key={contact.title} delay={idx * 80}>
                {contact.action ? (
                  <a
                    href={contact.action}
                    target={contact.action.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="contact-card"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = `${contact.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <div className="contact-icon" style={{ background: `${contact.color}15`, borderColor: `${contact.color}40` }}>
                      {contact.icon}
                    </div>
                    <h3 className="contact-title-card">
                      {contact.title}
                    </h3>
                    <p className="contact-value" style={{ color: contact.color }}>
                      {contact.value}
                    </p>
                  </a>
                ) : (
                  <div
                    className="contact-card"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = `${contact.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <div className="contact-icon" style={{ background: `${contact.color}15`, borderColor: `${contact.color}40` }}>
                      {contact.icon}
                    </div>
                    <h3 className="contact-title-card">
                      {contact.title}
                    </h3>
                    <p className="contact-value" style={{ color: contact.color }}>
                      {contact.value}
                    </p>
                  </div>
                )}
              </AnimSection>
            ))}
          </div>

          <AnimSection delay={200} className="contact-form-toggle">
            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="contact-form-button"
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 40px rgba(99,102,241,0.5)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 32px rgba(99,102,241,0.4)";
              }}
            >
              💬 {showContactForm ? "Ocultar formulario" : "Enviar mensaje directo"}
            </button>
          </AnimSection>

          {showContactForm && (
            <AnimSection delay={300} style={{ marginTop: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "32px",
                padding: "40px",
              }}>
                <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "24px", textAlign: "center" }}>
                  Cuéntame sobre tu proyecto
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      fontSize: "14px",
                      color: "#fff",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={e => e.target.style.borderColor = "#3B82F6"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      fontSize: "14px",
                      color: "#fff",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={e => e.target.style.borderColor = "#3B82F6"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <textarea
                    placeholder="Descripción del proyecto..."
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      fontSize: "14px",
                      color: "#fff",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={e => e.target.style.borderColor = "#3B82F6"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <button
                    onClick={() => {
                      const whatsappMessage = `Hola Josue! Me llamo ${formData.name}.%0A%0A${formData.message}%0A%0AMi email: ${formData.email}`;
                      window.open(`https://wa.me/50558249298?text=${whatsappMessage}`, "_blank");
                      setFormData({ name: "", email: "", message: "" });
                      setShowContactForm(false);
                    }}
                    style={{
                      background: "linear-gradient(135deg, #22C55E, #16A34A)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "16px",
                      padding: "16px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.target.style.transform = "translateY(0)"}
                  >
                    Enviar por WhatsApp 💬
                  </button>
                </div>
              </div>
            </AnimSection>
          )}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 5%",
        textAlign: "center",
        background: "rgba(0,0,0,0.3)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "24px", flexWrap: "wrap" }}>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
              >
                {link.label}
              </button>
            ))}
          </div>
          <p style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2025 Josue Castillo · Desarrollador Full Stack · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
