import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export interface Task {
    id : string,
    title: string,
    description: string,
    completed: boolean,
    handlerDelete: any,
    handlerEditar?: any,

}



const TaskComponent = (task: Task) => {

  return (
    <div key={task.id} className='m-5 bg-slate-300 rounded p-2'>
        
        <h3 className=' text-xl mb-2'>Nombre de la tarea: {task.title}</h3>
        <p>descripcion: {task.description}</p>
        <button onClick={task.handlerDelete} className=' bg-red-700 text-white m-2 px-2'>{task.completed ? "Completa" : "Incompleta"}</button>
        <Link to={`/edit-task/${task.id}`} className="m-2 px-4 py-1 bg-slate-500 text-white">Editar</Link>


    </div>
  )
}

export default TaskComponent