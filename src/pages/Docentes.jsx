import { docentes } from "../data/datos.js";

export default function Docentes() {
  return (
    <section>
      <h2 className="seccion-titulo">Docentes</h2>

      <div className="tarjetas">
        {docentes.map((d) => (
          <article key={d.id} className="tarjeta tarjeta--docente">
            
          </article>
        ))}
      </div>
    </section>
  );
}
