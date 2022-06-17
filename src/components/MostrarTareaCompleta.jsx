import React from "react";

function MostrarTareaCompleta({
  actualizarTarea,
  limpiarTareas,
  tareaCompletada,
}) {
  function handleDelete() {
    if (
      window.confirm(
        "¿ Estas seguro de querer eliminar las tareas realizadas ?"
      )
    ) {
      limpiarTareas();
    }
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={tareaCompletada}
          onChange={(e) => actualizarTarea(e.target.checked)}
        />{" "}
        Tareas realizadas
      </label>
      <button onClick={handleDelete}>Limpiar</button>
    </div>
  );
}

export default MostrarTareaCompleta;
