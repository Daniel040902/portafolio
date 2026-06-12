export default function ContactForm({ formData, setFormData, setShowContactForm }) {
  const handleSubmit = () => {
    const message = `Hola Josue! Me llamo ${formData.name}.%0A%0A${formData.message}%0A%0AMi email: ${formData.email}`;
    window.open(`https://wa.me/50558249298?text=${message}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
    setShowContactForm(false);
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">Cu&eacute;ntame sobre tu proyecto</h3>
      <div className="contact-form-fields">
        <input
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="contact-input"
        />
        <textarea
          placeholder="Descripci&oacute;n del proyecto..."
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="contact-textarea"
        />
        <button onClick={handleSubmit} className="contact-submit">
          Enviar por WhatsApp 💬
        </button>
      </div>
    </div>
  );
}
