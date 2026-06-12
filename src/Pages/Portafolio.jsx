import { useState, useEffect, useCallback } from "react";
import useCounter from "../hooks/useCounter";
import Navbar from "../components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import TrainingSection from "../components/sections/TrainingSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";
import { statsData } from "../data/portfolioData";
import "../css/Portafolio.css";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("portafolio");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [filterCategory, setFilterCategory] = useState("todos");
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const projectCount = useCounter(statsData[0].value, 1500);
  const techCount = useCounter(statsData[1].value, 1500);
  const experienceYears = useCounter(statsData[2].value, 1500);
  const clientsCount = useCounter(statsData[3].value, 1500);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["portafolio", "sobre", "habilidades", "trayectoria", "proyectos", "contacto"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveNav(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setActiveNav(id);
    }
  }, []);

  const stats = [
    { label: statsData[0].label, value: projectCount, suffix: statsData[0].suffix },
    { label: statsData[1].label, value: techCount, suffix: statsData[1].suffix },
    { label: statsData[2].label, value: experienceYears, suffix: statsData[2].suffix },
    { label: statsData[3].label, value: clientsCount, suffix: statsData[3].suffix },
  ];

  return (
    <div className="portfolio">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" />
      <Navbar scrolled={scrolled} activeNav={activeNav} scrollTo={scrollTo} />
      <HeroSection stats={stats} />
      <AboutSection />
      <SkillsSection hoveredSkill={hoveredSkill} onHover={setHoveredSkill} />
      <TrainingSection />
      <ProjectsSection filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      <ContactSection
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
        formData={formData}
        setFormData={setFormData}
      />
      <FooterSection scrollTo={scrollTo} />
    </div>
  );
}
