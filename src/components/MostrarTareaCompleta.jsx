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
    <div className="d-flex justify-content-between bg-light text-black text-center p-4 border-secondary">
      <div className="form-check form-switch">
        <label>
          Ver tareas realizadas
          <input
            className="form-check-input bg-dark text-white "
            type="checkbox"
            checked={tareaCompletada}
            onChange={(e) => actualizarTarea(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleDelete} className="btn btn-dark btn-sm">
        Limpiar
      </button>
    </div>
  );
}

export default MostrarTareaCompleta;
