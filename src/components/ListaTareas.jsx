import React from "react";
import Tarea from "./Tarea";

function ListaTareas({ lista, actualizar, filtrar, titulo }) {
  function mostrarTarea(value) {
    return lista
      .filter((e) => e.done === value)
      .map((e) => <Tarea key={e.name} tarea={e} actualizar={actualizar} />);
  }
  return (
    <table className="table table-black text-white table-bordered border-secondary">
      <thead>
        <tr className="table-black bg-dark text-light ">
          <th className="fw-normal fst-italic">{titulo}</th>
        </tr>
      </thead>
      <tbody>{mostrarTarea(filtrar)}</tbody>
    </table>
  );
}

export default ListaTareas;
