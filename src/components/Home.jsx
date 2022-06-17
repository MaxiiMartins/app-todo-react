import React, { useEffect, useState } from "react";
import CreadorTareas from "./CreadorTareas";
import ListaTareas from "./ListaTareas";
import MostrarTareaCompleta from "./MostrarTareaCompleta";
import Nav from "./Nav";

function Home() {
  const [listaDeTareas, setlistaDeTareas] = useState([]);
  const [tareaCompletada, setTareaCompletada] = useState(false);

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

  function limpiarTareas(){
    const nuevo = listaDeTareas.filter(e=> !e.done)
    setlistaDeTareas(nuevo)
    setTareaCompletada(false)
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
        <Nav />
      </header>
      <main>
        <CreadorTareas agregarTarea={agregarTarea} />
        <ListaTareas
          lista={listaDeTareas}
          actualizar={actualizarTarea}
          filtrar={false}
        />

        <MostrarTareaCompleta
        actualizarTarea={(booleano)=>setTareaCompletada(booleano)}
        limpiarTareas={limpiarTareas}
        tareaCompletada={tareaCompletada}
        />

        {tareaCompletada && (
          <ListaTareas
            lista={listaDeTareas}
            actualizar={actualizarTarea}
            filtrar={tareaCompletada}
          />
        )}
      </main>
    </div>
  );
}

export default Home;
