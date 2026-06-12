import { Routes, Route } from "react-router-dom";

// Importación de la página principal del portafolio
import Portafolio from "../pages/Portafolio";

/**
 * Enrutador principal de la aplicación.
 * Actualmente solo contiene la ruta raíz que renderiza el portafolio.
 * @returns {JSX.Element} Componente con las rutas definidas
 */
function AppRouter() {
  return (
    <Routes>
      {/* Ruta principal: Portafolio personal */}
      <Route path="/" element={<Portafolio />} />
    </Routes>
  );
}

export default AppRouter;
