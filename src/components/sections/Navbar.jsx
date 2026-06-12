import { navLinks } from "../../data/portfolioData";

export default function Navbar({ scrolled, activeNav, scrollTo }) {
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <button onClick={() => scrollTo("portafolio")} className="logo-button">
          <div className="logo-avatar">JC</div>
          <div>
            <div className="logo-text">Josue <span>Castillo</span></div>
            <div className="logo-subtitle">Full Stack Developer</div>
          </div>
        </button>
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          {navLinks.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-button ${activeNav === id ? "active" : ""}`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
