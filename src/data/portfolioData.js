/**
 * ============================================
 *  PORTFOLIO DATA - Josue Castillo
 *  Datos estáticos del portafolio personal
 * ============================================
 */
import directorioImg from "../assets/images/proyectos/directorio-vinculacion/Sistemade vinculacion.jpeg";

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
  { name: "Kotlin", level: 75, color: "#7F52FF", bg: "#160d20", icon: "📱", years: "1+ año" },
  { name: "Tailwind CSS", level: 93, color: "#38BDF8", bg: "#0d1a20", icon: "🎨", years: "3+ años" },
  { name: "Git & GitHub", level: 90, color: "#F05032", bg: "#1f120d", icon: "📦", years: "3+ años" },
  { name: "Docker", level: 72, color: "#2496ED", bg: "#0d1520", icon: "🐳", years: "1+ año" },
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
    img: directorioImg,
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
  {
    title: "Sistema de Facturación - Bordados y Sublimación",
    category: "Empresarial",
    desc: "Sistema de facturación personalizada con contabilidad integrada, cierre de caja, roles de usuario, gestión de pedidos y facturación electrónica para negocio de bordados y sublimación.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    highlight: true,
    year: "2025",
    features: ["Facturación personalizada", "Contabilidad integrada", "Cierre de caja", "Roles y permisos", "Gestión de pedidos", "Control de inventario"]
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
    title: "Full Stack Web",
    desc: "Aplicaciones web modernas y escalables con React, Laravel y bases de datos robustas.",
    accent: "#93C5FD",
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
  { label: "Proyectos", value: 5, suffix: "+" },
  { label: "Tecnologías", value: 9, suffix: "+" },
  { label: "Experiencia", value: 3, suffix: "+ años" },
  { label: "Clientes", value: 12, suffix: "+" },
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
    description: "Participé en procesos tecnológicos y administrativos dentro del entorno empresarial, brindando soporte técnico y trabajando con herramientas de gestión empresarial como SAP. Durante la pasantía fortalecí habilidades en manejo de información, automatización de procesos y organización de datos corporativos en un entorno empresarial real.",
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
    icon: "🧾",
    title: "Full Stack Developer - Sistema de Facturación",
    subtitle: "Bordados y Sublimación",
    period: "2025",
    technologies: ["React", "Laravel", "PostgreSQL", "Tailwind CSS", "JavaScript", "Git & GitHub"],
    description: "Desarrollé un sistema de facturación personalizada completo para un negocio de bordados y sublimación. El sistema incluye contabilidad integrada, cierre de caja automático, roles de usuario (admin, vendedor, cliente), gestión de pedidos, facturación electrónica y control de inventario. Fue implementado como una solución integral para reemplazar procesos manuales y mejorar la eficiencia operativa del negocio.",
    highlights: [
      "Facturación personalizada con diseños propios",
      "Módulo de contabilidad con libro diario y mayor",
      "Cierre de caja automático con reportes diarios",
      "Sistema de roles y permisos (admin, vendedor, cliente)",
      "Gestión de pedidos con seguimiento de estado",
      "Facturación electrónica y tickets de venta",
      "Control de inventario en tiempo real",
      "Dashboard con indicadores financieros",
      "Exportación de reportes a PDF y Excel",
      "Despliegue en producción y capacitación al usuario"
    ],
    type: "professional"
  }
];
