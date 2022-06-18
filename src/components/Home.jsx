import React, { useEffect, useState } from "react";
import CreadorTareas from "./CreadorTareas";
import ListaTareas from "./ListaTareas";
import MostrarTareaCompleta from "./MostrarTareaCompleta";
import Nav from "./Nav";
import logo from "../img/logo192.png"


function Home() {
  const [listaDeTareas, setlistaDeTareas] = useState([]);
  const [tareaCompletada, setTareaCompletada] = useState(false);
  const [pestaña,setPestaña] = useState(1)

  function agregarTarea(tarea) {
    if (!listaDeTareas.find((e) => e.name === tarea)) {
      const newTarea = { name: tarea, done: false };
      setlistaDeTareas([...listaDeTareas, newTarea]);
    } else {
      alert("ya existe una tarea con ese nombre");
    }
  }

  function actualizarTarea(tarea) {
    const actualizado = listaDeTareas.map((e) =>
      e.name === tarea ? { ...e, done: !e.done } : e
    );
    setlistaDeTareas(actualizado);
  }

  function limpiarTareas() {
    const nuevo = listaDeTareas.filter((e) => !e.done);
    setlistaDeTareas(nuevo);
    setTareaCompletada(false);
  }

  //nos traemos el localStorage y lo guardamos en nuestro estado del componente
  useEffect(() => {
    const data = localStorage.getItem("Lista");
    if (data) {
      setlistaDeTareas(JSON.parse(data));
    }
  }, []);

  //seteamos el estado de nuestro componente en el localStorage
  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(listaDeTareas));
  }, [listaDeTareas]);


  return (
    <div>
      <header>
        <Nav setPestaña={setPestaña} pestaña={pestaña} />
      </header>
      <div className="tab-content py-3" id="nav-tabContent">
        <div
        className={pestaña === 1 ?"tab-pane fade show active":"tab-pane fade"}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <img src={logo} alt="logo" />
          <div class="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button className="btn btn-primary" onClick={()=>setPestaña(2)} >Go somewhere</button>
  </div>
        </div>
        <div
          className={pestaña === 2 ?"tab-pane fade show active":"tab-pane fade"}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <main>
        <CreadorTareas agregarTarea={agregarTarea} />
        <ListaTareas
            titulo={"Tareas pendientes"}
          lista={listaDeTareas}
          actualizar={actualizarTarea}
          filtrar={false}
        />

        <MostrarTareaCompleta
          actualizarTarea={(booleano) => setTareaCompletada(booleano)}
          limpiarTareas={limpiarTareas}
          tareaCompletada={tareaCompletada}
        />

        {tareaCompletada && (
          <ListaTareas
            titulo={"Tareas realizadas"}
            lista={listaDeTareas}
            actualizar={actualizarTarea}
            filtrar={tareaCompletada}
          />
        )}
      </main>
        </div>
        <div
         className={pestaña === 3 ?"tab-pane fade show active":"tab-pane fade"}
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default Home;
