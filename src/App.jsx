/**
 * App - Componente raíz de la aplicación
 *
 * Renderiza el enrutador principal dentro de un contenedor
 * que ocupa todo el viewport.
 */

import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="w-full min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
