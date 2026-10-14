import { useState } from "react";
import { clases } from "../data/datos.js";

export default function Clases() {
  const [suscritas, setSuscritas] = useState([]);

  const alternar = (id) =>
    setSuscritas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section>
      <h2 className="seccion-titulo">Módulos disponibles</h2>

      <div className="tarjetas">
        {clases.map((c) => {
          const activa = suscritas.includes(c.id);
          return (
            <article key={c.id} className="tarjeta">
              <img className="tarjeta__imagen" src={c.imagen} alt={c.titulo} />
              <div className="tarjeta__cuerpo">
                <h3>{c.titulo}</h3>
                <p>{c.descripcion}</p>
                <button
                  className={"boton" + (activa ? " boton--suscrito" : "")}
                  onClick={() => alternar(c.id)}
                >
                  {activa ? "Suscrito" : "Suscribirse"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
