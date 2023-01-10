import React from 'react'
import TaskComponent,{Task} from './TaskComponent'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/taks/taskSlice'

const TaskList = () => {
    const taskState = useSelector((state:any) => state.task)
    const dispatch = useDispatch()

    const handlerDelete = (id: string) => {
      
      dispatch(deleteTask(id))


    }
  return (

    <div className="header h-screen">
      <h1 className='text-3xl text-white text-center'>Tareas totales {taskState.length}</h1>

    <div className=' flex gap-5'>
        {taskState.map((task:Task) => (
          <TaskComponent 
          key={task.id}
          id={task.id} 
          title={task.title} 
          description={task.description}
          completed={task.completed}
          handlerDelete={()=>handlerDelete(task.id)} />))}
        
      </div>
        

    </div>
  )
}

export default TaskList