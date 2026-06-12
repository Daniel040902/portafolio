import { navLinks } from "../../data/portfolioData";

export default function FooterSection({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="footer-link">
              {link.label}
            </button>
          ))}
        </div>
        <p className="footer-text">
          &copy; 2025 Josue Castillo · Desarrollador Full Stack · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
