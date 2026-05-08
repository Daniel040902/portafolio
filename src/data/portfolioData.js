export const skills = [
  { name: "React", level: 92, color: "#61DAFB", bg: "#0d1f2d", icon: "⚛️", years: "3+ años" },
  { name: "Laravel", level: 88, color: "#FF2D20", bg: "#1f0d0d", icon: "🔷", years: "2+ años" },
  { name: "Node.js", level: 85, color: "#68A063", bg: "#0d1a10", icon: "🟢", years: "2+ años" },
  { name: "MySQL", level: 87, color: "#4479A1", bg: "#0d1320", icon: "🐬", years: "3+ años" },
  { name: "PostgreSQL", level: 83, color: "#336791", bg: "#0d1520", icon: "🐘", years: "2+ años" },
  { name: "Kotlin", level: 75, color: "#7F52FF", bg: "#160d20", icon: "📱", years: "1+ año" },
  { name: "Tailwind CSS", level: 93, color: "#38BDF8", bg: "#0d1a20", icon: "🎨", years: "3+ años" },
  { name: "Git & GitHub", level: 90, color: "#F05032", bg: "#1f120d", icon: "📦", years: "3+ años" },
  { name: "Docker", level: 72, color: "#2496ED", bg: "#0d1520", icon: "🐳", years: "1+ año" },
];

export const projects = [
  {
    title: "Directorio de Vinculación",
    category: "Full Stack",
    desc: "Sistema web para registrar, buscar, editar e importar información académica y laboral con reportes avanzados.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Laravel", "PostgreSQL"],
    highlight: true,
    year: "2024",
    features: ["CRUD completo", "Importación masiva", "Reportes PDF", "Dashboard analítico"]
  },
  {
    title: "Sistema de Sublimación",
    category: "Empresarial",
    desc: "Gestión completa de inventario, ventas, clientes, pedidos, proveedores y reportes financieros.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Node.js", "MySQL"],
    highlight: false,
    year: "2024",
    features: ["Inventario en tiempo real", "Múltiples usuarios", "Facturación", "Dashboard ejecutivo"]
  },
  {
    title: "App Android Lista Compras",
    category: "Android",
    desc: "Aplicación móvil con CRUD completo, SQLite, menús desplegables y diseño moderno en Kotlin.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    tech: ["Kotlin", "SQLite", "Android"],
    highlight: false,
    year: "2023",
    features: ["Modo offline", "Categorías personalizables", "Exportar listas", "Widgets"]
  },
  {
    title: "Catálogo Google Sheets",
    category: "Frontend",
    desc: "Catálogo dinámico conectado a Google Sheets con Apps Script para actualización en tiempo real.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Apps Script", "Tailwind"],
    highlight: false,
    year: "2023",
    features: ["Actualización automática", "Filtros avanzados", "Optimizado móvil", "Sin backend"]
  },
];

export const services = [
  { 
    icon: "⚛️", 
    title: "Full Stack Web", 
    desc: "Aplicaciones web modernas y escalables con React, Laravel y bases de datos robustas.",
    accent: "#3B82F6",
    features: ["Rendimiento optimizado", "SEO avanzado", "PWA ready", "Seguridad implementada"]
  },
  { 
    icon: "🗄️", 
    title: "Bases de Datos", 
    desc: "Diseño, optimización y gestión de MySQL y PostgreSQL para máximo rendimiento.",
    accent: "#8B5CF6",
    features: ["Normalización", "Optimización queries", "Backup automático", "Alta disponibilidad"]
  },
  { 
    icon: "🔌", 
    title: "APIs & Servicios", 
    desc: "APIs REST seguras con autenticación JWT y documentación completa con Swagger.",
    accent: "#10B981",
    features: ["RESTful design", "Autenticación", "Rate limiting", "Documentación OpenAPI"]
  },
  { 
    icon: "📱", 
    title: "Apps Móviles", 
    desc: "Aplicaciones Android nativas con Kotlin y SQLite con experiencia de usuario premium.",
    accent: "#F59E0B",
    features: ["UI/UX moderna", "Offline first", "Push notifications", "Play Store deploy"]
  },
];

export const navLinks = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "sobre", label: "Sobre mí", icon: "👤" },
  { id: "habilidades", label: "Skills", icon: "⚡" },
  { id: "proyectos", label: "Proyectos", icon: "📁" },
  { id: "contacto", label: "Contacto", icon: "📧" },
];

export const categories = ["todos", "Full Stack", "Empresarial", "Android", "Frontend", "destacados"];

export const contactInfo = [
  { icon: "✉️", title: "Email", value: "valverde44255@gmail.com", color: "#3B82F6", action: "mailto:valverde44255@gmail.com" },
  { icon: "💬", title: "WhatsApp", value: "+505 5824 9298", color: "#22C55E", action: "https://wa.me/50558249298" },
  { icon: "📍", title: "Ubicación", value: "León, Nicaragua", color: "#8B5CF6", action: null },
  { icon: "🐙", title: "GitHub", value: "/josuecastillo", color: "#fff", action: "https://github.com" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "🐙", color: "#fff" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼", color: "#0A66C2" },
  { label: "WhatsApp", href: "https://wa.me/50558249298", icon: "💬", color: "#25D366" },
];

export const statsData = [
  { label: "Proyectos", value: 4, suffix: "+" },
  { label: "Tecnologías", value: 9, suffix: "+" },
  { label: "Experiencia", value: 3, suffix: "+ años" },
  { label: "Clientes", value: 12, suffix: "+" },
];

export const experienceData = [
  {
    role: "Pasante en Yazaki Nicaragua",
    period: "Septiembre 2025 - Enero 2026",
    technologies: ["SAP", "Excel", "Soporte de sistemas", "Manejo de datos"],
    description: "Aprendí procesos empresariales, uso de SAP, organización de información, soporte tecnológico y automatización básica de tareas."
  },
  {
    role: "Pasante en UNAN-León",
    period: "Febrero 2026 - Mayo 2026",
    technologies: ["React", "Laravel", "PostgreSQL", "APIs REST", "Tailwind CSS", "GitHub"],
    description: "Trabajé en el proyecto Directorio de Vinculación, aprendiendo desarrollo full stack, manejo de base de datos, autenticación, reportes, importación de Excel y buenas prácticas de desarrollo."
  }
];

export const educationData = {
  degree: "Ingeniería en Sistemas de Información",
  institution: "UNAN-León",
  period: "2021 - 2025",
  technologies: ["Laravel", "React", "MySQL", "PostgreSQL", "Git", "Docker", "Linux"],
  description: "Durante mi formación aprendí programación, bases de datos, desarrollo web, desarrollo móvil, redes, ingeniería de software, análisis de sistemas y buenas prácticas de desarrollo."
};
