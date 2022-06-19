import React from "react";

function Tarea({ tarea , actualizar}) {
  return (
    <tr key={tarea.name}>
      <td className={tarea.done ?"d-flex justify-content-between text-muted fst-italic " :"d-flex justify-content-between fst-italic text-black fst-italic"} >
        {tarea.name}
        <div className="form-check">
        <input
        className="form-check-input text-bg-dark" 
          type="checkbox"
          checked={tarea.done}
          disabled={tarea.done ?true:false}
          onChange={() => actualizar(tarea.name)}
        />
        </div>
      </td>
    </tr>
  );
}

export default Tarea;
