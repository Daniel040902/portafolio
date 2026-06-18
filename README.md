# Josue Castillo | Portafolio

Portafolio web personal de **Josue Castillo**, desarrollador Full Stack. Una aplicación moderna construida con React, Vite y Tailwind CSS, desplegada en GitHub Pages.

## 🚀 Tecnologías

- **React 19** — UI declarativa y componentes reutilizables
- **Vite 7** — Build tool ultrarrápido
- **Tailwind CSS 4** — Estilos utility-first
- **React Router DOM** — Enrutamiento SPA
- **Intersection Observer API** — Animaciones al hacer scroll
- **GitHub Pages** — Despliegue continuo

## ✨ Características

- Diseño oscuro moderno con gradientes animados
- Animaciones de entrada por scroll
- Contador animado de estadísticas
- Filtro de proyectos por categoría
- Formulario de contacto directo vía WhatsApp
- Totalmente responsive
- Scrollbar personalizada

## 📦 Instalación

```bash
git clone https://github.com/Daniel040902/portafolio.git
cd portafolio
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## 🏗️ Build

```bash
npm run build
```

Genera los archivos estáticos en la carpeta `dist/`.

## 🚢 Deploy

```bash
npm run deploy
```

Publica la carpeta `dist/` en GitHub Pages.

## 📁 Estructura

```
src/
├── Pages/         # Página principal (Portafolio)
├── components/    # Componentes reutilizables
│   ├── sections/  # Secciones completas (Hero, About, Skills, etc.)
│   ├── AnimSection.jsx
│   ├── ContactForm.jsx
│   ├── ProjectCard.jsx
│   └── SkillBar.jsx
├── css/           # Estilos CSS organizados por sección
├── data/          # Datos estáticos del portafolio
├── hooks/         # Hooks personalizados (useCounter, useInView)
├── routers/       # Configuración de rutas
├── App.jsx        # Componente raíz
├── index.css      # Estilos globales + Tailwind
└── main.jsx       # Punto de entrada
```


