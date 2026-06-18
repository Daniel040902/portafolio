import AnimSection from "../AnimSection";
import ContactForm from "../ContactForm";
import { contactInfo } from "../../data/portfolioData";

/**
 * ContactSection - Sección de contacto
 *
 * Muestra tarjetas con información de contacto (email, WhatsApp,
 * ubicación, GitHub) y un botón para desplegar el formulario
 * de mensaje directo vía WhatsApp.
 *
 * @param {boolean}  showContactForm     - Indica si el form está visible
 * @param {Function} setShowContactForm  - Setter para mostrar/ocultar form
 * @param {Object}   formData            - Datos del formulario
 * @param {Function} setFormData         - Setter del estado formData
 */
export default function ContactSection({ showContactForm, setShowContactForm, formData, setFormData }) {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-bg">
        <div className="contact-bg-circle" />
      </div>
      <div className="contact-container">
        <AnimSection className="contact-header">
          <div className="contact-badge">CONTACTO</div>
          <h2 className="contact-title">
            &iquest;Tienes un <span>proyecto</span> en mente?
          </h2>
          <p className="contact-description">
            Hablemos y hag&aacute;moslo realidad juntos
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
                  style={{ "--color": contact.color }}
                >
                  <div className="contact-icon" style={{ background: `${contact.color}15`, borderColor: `${contact.color}40` }}>
                    {contact.icon}
                  </div>
                  <h3 className="contact-title-card">{contact.title}</h3>
                  <p className="contact-value" style={{ color: contact.color }}>{contact.value}</p>
                </a>
              ) : (
                <div className="contact-card" style={{ "--color": contact.color }}>
                  <div className="contact-icon" style={{ background: `${contact.color}15`, borderColor: `${contact.color}40` }}>
                    {contact.icon}
                  </div>
                  <h3 className="contact-title-card">{contact.title}</h3>
                  <p className="contact-value" style={{ color: contact.color }}>{contact.value}</p>
                </div>
              )}
            </AnimSection>
          ))}
        </div>
        <AnimSection delay={200} className="contact-form-toggle">
          <button
            onClick={() => setShowContactForm(!showContactForm)}
            className="contact-form-button"
          >
            💬 {showContactForm ? "Ocultar formulario" : "Enviar mensaje directo"}
          </button>
        </AnimSection>
        {showContactForm && (
          <AnimSection delay={300} className="contact-form-wrapper">
            <ContactForm formData={formData} setFormData={setFormData} setShowContactForm={setShowContactForm} />
          </AnimSection>
        )}
      </div>
    </section>
  );
}
