import React from 'react'

function Nav({setPestaña,pestaña}) {
    
  return (
   <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button onClick={()=>setPestaña(1)} className={pestaña === 1 ? "nav-link active fst-italic":"nav-link fst-italic"} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Bienvenido</button>
    <button onClick={()=>setPestaña(2)} className={pestaña === 2 ? "nav-link active fst-italic":"nav-link fst-italic"} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tareas</button>
    <button onClick={()=>setPestaña(3)} className={pestaña === 3 ? "nav-link active fst-italic":"nav-link fst-italic"} data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contacto</button>
  </div>
</nav>
    
  )
}

export default Nav