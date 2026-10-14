import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Clases from "./pages/Clases.jsx";
import Docentes from "./pages/Docentes.jsx";

const titulos = {
  "/": "Inicio",
  "/clases": "Asignación Clases",
  "/docentes": "Docentes",
};

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__principal">
        <Topbar titulo={titulos[pathname] ?? "Inicio"} />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/docentes" element={<Docentes />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
