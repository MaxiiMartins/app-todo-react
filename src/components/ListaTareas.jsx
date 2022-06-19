import React from "react";
import Tarea from "./Tarea";

function ListaTareas({ lista, actualizar, filtrar, titulo }) {
  function mostrarTarea(value) {
    let arr = lista.filter((e) => e.done === value) 
    if(arr.length){
      return arr.map((e) => <Tarea key={e.name} tarea={e} actualizar={actualizar} />);
    }else{
      return(
        <tr>
          <td>
            {"ㅤ"}
          </td>
        </tr>
      )
    }
  }
  return (
    <table className="table table-black text-white table-bordered border-secondary">
      <thead>
        <tr className="table-black bg-dark text-light">
          <th className="fw-normal fst-italic fw-bold">{titulo}</th>
        </tr>
      </thead>
      <tbody>{mostrarTarea(filtrar)}</tbody>
    </table>
  );
}

export default ListaTareas;
