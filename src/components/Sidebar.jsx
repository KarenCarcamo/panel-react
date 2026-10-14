import { NavLink } from "react-router-dom";
import { enlaces, USUARIO } from "../data/datos.js";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__usuario">{USUARIO.nombre}</div>

      <nav className="sidebar__nav">
        {enlaces.map((e) => (
          <NavLink
            key={e.ruta}
            to={e.ruta}
            end={e.ruta === "/"}
            className={({ isActive }) =>
              "sidebar__link" + (isActive ? " sidebar__link--activo" : "")
            }
          >
            {e.etiqueta}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
