import React from "react";

function Nav({ setPestaña, pestaña }) {
  return (
    <nav>
      <div className="nav nav-tabs pt-1" id="nav-tab" role="tablist">
        <button
          onClick={() => setPestaña(1)}
          className={
            pestaña === 1
              ? "nav-link active mx-1 fst-italic text-dark"
              : "nav-link mx-1 fst-italic bg-dark text-white"
          }
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Bienvenido
        </button>
        <button
          onClick={() => setPestaña(2)}
          className={
            pestaña === 2
              ? "nav-link active mx-1 fst-italic text-dark"
              : "nav-link mx-1 fst-italic bg-dark text-white"
          }
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Tareas
        </button>
      </div>
    </nav>
  );
}

export default Nav;
