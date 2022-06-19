import React from "react";
import logo from "../img/logo192.png";

function Bienvenidos({ setPestaña }) {
  return (
    <div className="card-body px-5">
      <img src={logo} alt="logo" className="my-2" />
      <h2 className="card-title my-2">Lista de tarea</h2>
      <figure>
        <blockquote class="blockquote">
          <p>
            Es una aplicación web simple donde podés gestionar una lista de
            tareas pendientes, podés agregar una tarea a tu lista y eliminar las
            tareas realizadas. Espero tengas una buena experiencia utilizando la
            aplicación. Saludos 👋
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title">Acepto cualquier tipo de feedback 😊</cite>
        </figcaption>
      </figure>
      <button className="btn text-bg-dark btn-lg" onClick={() => setPestaña(2)}>
        Ingresar
      </button>
    </div>
  );
}

export default Bienvenidos;
