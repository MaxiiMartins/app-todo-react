import React from "react";
import Tarea from "./Tarea";

function ListaTareas({ lista, actualizar, filtrar }) {

  function mostrarTarea(value) {
    return(
        lista
      .filter((e) => e.done === value)
      .map((e) => <Tarea key={e.name} tarea={e} actualizar={actualizar} />)
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Lista de tareas</th>
        </tr>
      </thead>
      <tbody>{mostrarTarea(filtrar)}</tbody>
    </table>
  );
}

export default ListaTareas;
