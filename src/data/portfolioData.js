/**
 * ============================================
 *  PORTFOLIO DATA - Josue Castillo
 *  Datos estáticos del portafolio personal
 * ============================================
 */

import vinculacionImg from "../assets/images/proyectos/directorio-vinculacion/sistema-vinculacion.png";
import bordafamilyImg from "../assets/images/proyectos/sistema-sublimacion/Bordafamily.png";

/**
 * Habilidades técnicas con nivel de dominio.
 * @property {string}  name     - Nombre de la tecnología
 * @property {number}  level    - Porcentaje de dominio (0-100)
 * @property {string}  color    - Color hexadecimal principal
 * @property {string}  bg       - Color hexadecimal de fondo
 * @property {string}  icon     - Emoji representativo
 * @property {string}  years    - Años de experiencia
 */
export const skills = [
  { name: "React", level: 92, color: "#61DAFB", bg: "#0d1f2d", icon: "⚛️", years: "3+ años" },
  { name: "Laravel", level: 88, color: "#FF2D20", bg: "#1f0d0d", icon: "🔷", years: "2+ años" },
  { name: "Node.js", level: 85, color: "#68A063", bg: "#0d1a10", icon: "🟢", years: "2+ años" },
  { name: "MySQL", level: 87, color: "#4479A1", bg: "#0d1320", icon: "🐬", years: "3+ años" },
  { name: "PostgreSQL", level: 83, color: "#336791", bg: "#0d1520", icon: "🐘", years: "2+ años" },
  { name: "Kotlin", level: 75, color: "#7F52FF", bg: "#160d20", icon: "📱", years: "3+ años" },
  { name: "Android Studio", level: 78, color: "#3DDC84", bg: "#0d1a10", icon: "🤖", years: "3+ años" },
  { name: "Tailwind CSS", level: 93, color: "#38BDF8", bg: "#0d1a20", icon: "🎨", years: "3+ años" },
  { name: "Git & GitHub", level: 90, color: "#F05032", bg: "#1f120d", icon: "📦", years: "3+ años" },
  { name: "Docker", level: 72, color: "#2496ED", bg: "#0d1520", icon: "🐳", years: "1+ año" },
  { name: ".NET", level: 75, color: "#512BD4", bg: "#1a0d2d", icon: "🟣", years: "1+ año" },
  { name: "Linux", level: 70, color: "#FCC624", bg: "#1a1a0d", icon: "🐧", years: "3+ años" },
];

/**
 * Proyectos realizados.
 * @property {string}  title     - Nombre del proyecto
 * @property {string}  category  - Categoría (Full Stack, Empresarial, Android, Frontend)
 * @property {string}  desc      - Descripción breve
 * @property {string}  img       - URL de la imagen del proyecto
 * @property {string[]} tech     - Tecnologías utilizadas
 * @property {boolean} highlight - Si es un proyecto destacado
 * @property {string}  year      - Año de realización
 * @property {string[]} features - Características principales
 */
export const projects = [
  {
    title: "Directorio de Vinculación",
    category: "Full Stack",
    desc: "Sistema web para registrar, buscar, editar e importar información académica y laboral con reportes avanzados.",
    img: vinculacionImg,
    url: "https://drive.google.com/drive/folders/1VrnWj3wGorsq1d912t92w37ZUMdUHDjf?usp=drive_link",
    tech: ["React", "Laravel", "PostgreSQL"],
    highlight: true,
    features: ["CRUD completo", "Importación masiva", "Reportes PDF", "Dashboard analítico"]
  },
  {
    title: "Sistema de Sublimación",
    category: "Empresarial",
    desc: "Gestión completa de inventario, ventas, clientes, pedidos, proveedores y reportes financieros.",
    img: bordafamilyImg,
    url: "https://github.com/Daniel040902/Bordafamily",
    tech: ["React", "Node.js", "MySQL"],
    highlight: false,
    features: ["Inventario en tiempo real", "Múltiples usuarios", "Facturación", "Dashboard ejecutivo"]
  },
  {
    title: "Lista de Landing Pages",
    category: "Frontend",
    desc: "Compilación de landing pages modernas y responsivas desarrolladas con React y Tailwind CSS.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    url: "https://github.com/Daniel040902/Catalogo-Bordafamily",
    liveUrl: "https://borda-family.com/",
    tech: ["React", "Tailwind"],
    highlight: false,
    features: ["Diseño responsivo", "Componentes reutilizables", "Rendimiento optimizado"]
  },
];

/**
 * Servicios ofrecidos.
 * @property {string}   icon     - Emoji representativo
 * @property {string}   title    - Título del servicio
 * @property {string}   desc     - Descripción del servicio
 * @property {string}   accent   - Color de acento hexadecimal
 * @property {string[]} features - Características del servicio
 */
export const services = [
  {
    icon: "⚛️",
    title: "Desarrollo Web",
    desc: "React, Laravel, .NET y Node.js para crear aplicaciones modernas y escalables.",
    accent: "#93C5FD",
    features: []
  },
  {
    icon: "🗄️",
    title: "Bases de Datos",
    desc: "Diseño, optimización y administración de PostgreSQL y MySQL.",
    accent: "#8B5CF6",
    features: []
  },
  {
    icon: "🔌",
    title: "APIs REST",
    desc: "Desarrollo e integración de servicios REST seguros y eficientes.",
    accent: "#10B981",
    features: []
  },
  {
    icon: "📚",
    title: "Aprendizaje Continuo",
    desc: "Capacitación constante en nuevas tecnologías y buenas prácticas de desarrollo.",
    accent: "#F59E0B",
    features: []
  },
];

/**
 * Enlaces de navegación del menú principal.
 * @property {string} id    - Identificador para scroll y active state
 * @property {string} label - Texto visible del enlace
 * @property {string} icon  - Emoji del icono
 */
export const navLinks = [
  { id: "portafolio", label: "Portafolio", icon: "🏠" },
  { id: "sobre", label: "Sobre mí", icon: "👤" },
  { id: "habilidades", label: "Skills", icon: "⚡" },
  { id: "proyectos", label: "Proyectos", icon: "📁" },
  { id: "contacto", label: "Contacto", icon: "📧" },
];

/**
 * Categorías para filtrar proyectos.
 */
export const categories = ["todos", "Full Stack", "Empresarial", "Android", "Frontend", "destacados"];

/**
 * Información de contacto.
 * @property {string}      icon   - Emoji del icono
 * @property {string}      title  - Tipo de contacto
 * @property {string}      value  - Valor/dato de contacto
 * @property {string}      color  - Color de acento hexadecimal
 * @property {string|null} action - Enlace de acción (mailto, https, null)
 */
export const contactInfo = [
  { icon: "✉️", title: "Email", value: "valverde44255@gmail.com", color: "#93C5FD", action: "mailto:valverde44255@gmail.com" },
  { icon: "💬", title: "WhatsApp", value: "+505 5824 9298", color: "#22C55E", action: "https://wa.me/50558249298" },
  { icon: "📍", title: "Ubicación", value: "León, Nicaragua", color: "#8B5CF6", action: null },
  { icon: "🐙", title: "GitHub", value: "/josuecastillo", color: "#fff", action: "https://github.com" },
];

/**
 * Redes sociales del perfil.
 * @property {string} label - Nombre de la red
 * @property {string} href  - URL del perfil
 * @property {string} icon  - Emoji del icono
 * @property {string} color - Color de la marca
 */
export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "🐙", color: "#fff" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼", color: "#0A66C2" },
  { label: "WhatsApp", href: "https://wa.me/50558249298", icon: "💬", color: "#25D366" },
];

/**
 * Estadísticas personales (valores de contador animado).
 * @property {string} label  - Nombre de la estadística
 * @property {number} value  - Valor numérico
 * @property {string} suffix - Sufijo del valor (+, años)
 */
export const statsData = [
  { label: "Proyectos", value: 3, suffix: "+" },
  { label: "Tecnologías", value: 9, suffix: "+" },
  { label: "Experiencia", value: 3, suffix: "+ años" },
];

/**
 * Datos de formación académica y trayectoria profesional.
 * @property {string}   icon         - Emoji representativo
 * @property {string}   title        - Título o puesto
 * @property {string}   subtitle     - Institución o empresa
 * @property {string}   period       - Período de tiempo
 * @property {string[]} technologies - Tecnologías o herramientas asociadas
 * @property {string}   description  - Descripción detallada
 * @property {string[]} highlights   - Logros destacados (solo profesional)
 * @property {string}   type         - "academic" | "professional"
 */
export const trainingData = [
  {
    icon: "🎓",
    title: "Ingeniería en Sistemas de Información",
    subtitle: "UNAN-León",
    period: "2021 - 2025",
    technologies: ["Laravel", "React", "MySQL", "PostgreSQL", "Git", "Docker", "Linux"],
    description: "Carrera enfocada en el desarrollo de software, administración de bases de datos, redes y seguridad informática. Adquirí competencias en programación full stack con Laravel y React, diseño y administración de bases de datos MySQL y PostgreSQL, control de versiones con Git, virtualización con Docker y administración de sistemas Linux. También desarrollé habilidades en análisis de sistemas, ingeniería de software, metodologías ágiles y desarrollo de aplicaciones móviles.",
    type: "academic"
  },
  {
    icon: "🚀",
    title: "Pasante de Desarrollo y Soporte Tecnológico",
    subtitle: "Yazaki Nicaragua",
    period: "Septiembre 2025 - Enero 2026",
    technologies: ["SAP", "Microsoft Excel", "Soporte técnico", "Gestión de datos", "Automatización de procesos"],
    description: "Participé en procesos tecnológicos y administrativos dentro del entorno empresarial, siendo analista de datos y trabajando con herramientas de gestión empresarial como SAP. Durante la pasantía fortalecí habilidades en manejo de información, automatización de procesos y organización de datos corporativos en un entorno empresarial real.",
    type: "professional"
  },
  {
    icon: "💼",
    title: "Full Stack Developer - Directorio de Vinculación",
    subtitle: "UNAN-León",
    period: "Febrero 2026 - Mayo 2026",
    technologies: ["React", "Laravel", "PostgreSQL", "APIs REST", "Tailwind CSS", "Git & GitHub", "Docker", "Linux"],
    description: "Desarrollé completamente el sistema \"Directorio de Vinculación\", una plataforma web orientada a la gestión académica y laboral. Me encargué del desarrollo frontend y backend, diseño de base de datos, autenticación, APIs REST, importación masiva de Excel, reportes y despliegue del sistema en producción. Durante el proyecto aprendí procesos de despliegue y configuración de aplicaciones web utilizando Docker y entornos Linux, logrando implementar el sistema en producción y mantenerlo funcionando correctamente.",
    highlights: [
      "Desarrollo completo del frontend y backend",
      "Diseño y gestión de base de datos PostgreSQL",
      "Creación y consumo de APIs REST",
      "Implementación de autenticación y seguridad",
      "Importación masiva de datos desde Excel",
      "Generación de reportes y dashboards",
      "Despliegue y puesta en producción del sistema",
      "Configuración básica de Docker y Linux",
      "Optimización y mantenimiento del sistema",
      "Control de versiones con Git y GitHub"
    ],
    type: "professional"
  },
  {
    icon: "💻",
    title: "Sistema de Facturación Borda Family",
    subtitle: "Proyecto Independiente",
    period: "Mayo 2026 - Junio 2026",
    technologies: ["React", "PostgreSQL", "Node.js", "APIs REST", "Git & GitHub"],
    description: "Desarrollé un sistema de facturación completo para la empresa Borda Family, implementando gestión de usuarios, roles, inventario y módulo de facturación. El sistema permite control de stock, generación de facturas, administración de clientes y reportes financieros básicos.",
    highlights: [
      "Gestión de usuarios con roles y permisos",
      "Control de inventario y stock",
      "Módulo completo de facturación",
      "Generación de reportes",
      "Base de datos PostgreSQL optimizada"
    ],
    type: "professional"
  }
];
