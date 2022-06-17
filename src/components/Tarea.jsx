import React from "react";

function Tarea({ tarea , actualizar}) {
  return (
    <tr key={tarea.name}>
      <td>
        {tarea.name}
        <input
          type="checkbox"
          checked={tarea.done}
          onChange={() => actualizar(tarea.name)}
        />
      </td>
    </tr>
  );
}

export default Tarea;
