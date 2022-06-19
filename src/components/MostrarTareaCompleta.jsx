import React from "react";

function MostrarTareaCompleta({
  actualizarTarea,
  limpiarTareas,
  tareaCompletada,
}) {
  
  return (
    <div className="d-flex justify-content-between bg-light text-black text-center p-4 border-secondary">
      <div className="form-check form-switch">
        <label className=" fst-italic fw-bold">
          Ver tareas realizadas
          <input
            className="form-check-input bg-dark text-white"
            type="checkbox"
            checked={tareaCompletada}
            onChange={(e) => actualizarTarea(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={limpiarTareas} className="btn btn-dark btn-sm">
        Limpiar
      </button>
    </div>
  );
}

export default MostrarTareaCompleta;
