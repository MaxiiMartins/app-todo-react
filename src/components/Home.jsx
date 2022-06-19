import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Bienvenidos from "./Bienvenidos";
// import Contacto from "./Contacto";
import CreadorTareas from "./CreadorTareas";
import ListaTareas from "./ListaTareas";
import MostrarTareaCompleta from "./MostrarTareaCompleta";
import Nav from "./Nav";

function Home() {
  const [listaDeTareas, setlistaDeTareas] = useState([]);
  const [tareaCompletada, setTareaCompletada] = useState(false);
  const [pestaña, setPestaña] = useState(1);
  const alertaPersonalizada = (titulo) =>{
    let timerInterval;
      Swal.fire({
        title: titulo,
        icon:"info",
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
  }

  function agregarTarea(tarea) {
    if (!listaDeTareas.find((e) => e.name.toLowerCase() === tarea.toLowerCase())) {
      const newTarea = { name: tarea, done: false };
      setlistaDeTareas([...listaDeTareas, newTarea]);
    } else {
      let timerInterval;
      Swal.fire({
        title: "Ya existe esa tarea",
        icon:"info",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
  }

  function actualizarTarea(tarea) {
    const actualizado = listaDeTareas.map((e) =>
      e.name === tarea ? { ...e, done: !e.done } : e
    );
    setlistaDeTareas(actualizado);
  }

  function limpiarTareas() {
    if(listaDeTareas.length){
      Swal.fire({
        title: '¿Estas seguro de querer eliminar las tareas realizadas?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          const nuevo = listaDeTareas.filter((e) => !e.done);
      setlistaDeTareas(nuevo);
      setTareaCompletada(false);
          Swal.fire(
            '¡Eliminado correctamente!',
            '',
            'success'
          )
        }
      })
    }else{
      alertaPersonalizada("Todavia no has realizado ninguna tarea pendiente")
    }
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
    <div className="min-vh-100">
      <header>
        <Nav setPestaña={setPestaña} pestaña={pestaña} />
      </header>
      <div
        className="tab-content py-3 row justify-content-center"
        id="nav-tabContent"
      >
        <div
          className={
            pestaña === 1 ? "tab-pane fade show active" : "tab-pane fade"
          }
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Bienvenidos setPestaña={setPestaña} />
        </div>
        <div
          className={
            pestaña === 2 ? "tab-pane fade show active" : "tab-pane fade"
          }
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <CreadorTareas agregarTarea={agregarTarea} alerta={alertaPersonalizada} />
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
        </div>
      </div>
    </div>
  );
}

export default Home;
