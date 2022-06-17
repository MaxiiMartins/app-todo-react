import React, { useState } from 'react'

function CreadorTareas({agregarTarea}) {
    const [tarea,setTarea]= useState("")

    function handleSubmit(e){
        e.preventDefault()
        agregarTarea(tarea)
        setTarea("")
    }
  return (
    <div>
        <h1>List</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresar nueva tarea' value={tarea} onChange={(e)=>setTarea(e.target.value)}/>
        <button >
            Guardar
        </button>
        </form>
    </div>
  )
}

export default CreadorTareas