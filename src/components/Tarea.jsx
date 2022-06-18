import React from "react";

function Tarea({ tarea , actualizar}) {
  return (
    <tr key={tarea.name}>
      <td className="d-flex justify-content-between fst-italic text-dark fst-italic">
        {tarea.name}
        <div className="checkbox-red">
        <input
          type="checkbox"
          checked={tarea.done}
          onChange={() => actualizar(tarea.name)}
        />
        </div>
      </td>
    </tr>
  );
}

export default Tarea;
