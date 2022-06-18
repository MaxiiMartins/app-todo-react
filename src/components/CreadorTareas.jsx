import React, { useState } from "react";

function CreadorTareas({ agregarTarea }) {
  const [tarea, setTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(tarea);
    setTarea("");
  }
  return (
    <div>
      <h1 className="fst-italic">¿ Cuál es el plan para hoy ?</h1>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9 input-group rounded-pill ">
          <input
            type="text"
            placeholder="Añadir nueva tarea"
            className="form-control border-dark fst-italic"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <button className="btn btn-dark btn-sm fst-italic">Añadir</button>
        </div>
      </form>
    </div>
  );
}

export default CreadorTareas;
