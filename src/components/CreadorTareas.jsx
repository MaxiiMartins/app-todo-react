import React, { useState } from "react";

function CreadorTareas({ agregarTarea , alerta }) {
  const [tarea, setTarea] = useState("");

  function handleChange(tarea){
    let capitalize = tarea.charAt(0).toUpperCase() + tarea.slice(1)
    setTarea(capitalize)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(tarea !== ""){
      agregarTarea(tarea);
    setTarea("");
    }else{
      alerta("Porfavor ingrese una tarea")
    }
  }
  return (
    <div>
      <h1 className="fst-italic py-2">¿ Cuál es el plan para hoy ?</h1>
      <form onSubmit={handleSubmit} className="mb-3 row">
        <div className="col-9 input-group rounded-pill ">
          <input
            type="text"
            placeholder="Añadir nueva tarea"
            className="form-control border-dark fst-italic py-2"
            value={tarea}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="btn btn-dark btn-sm fst-italic">Añadir</button>
        </div>
      </form>
    </div>
  );
}

export default CreadorTareas;
