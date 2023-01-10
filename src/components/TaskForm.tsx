import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTask,taskEdit } from '../features/taks/taskSlice'
import { v4 as uuidv } from 'uuid';
import {SyntheticEvent } from "react"
import { useNavigate,useParams } from 'react-router-dom';



const TaskForm = () => {

    const navegate = useNavigate()
    const params = useParams()
    const taskState = useSelector((state: any) => state.task)

    const [task, setTask] = useState({
        title: "",
        description: "",
    })
    const dispatch = useDispatch()

    const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // console.log(event.target.name,event.target.value)

        setTask({
            ...task,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        if(params.id){
            dispatch(taskEdit(task))

        }else {
            dispatch(addTask({...task, completed:false, id: uuidv()}))
        }
        navegate("/")    
    }

    useEffect(()=>{
        console.log(params)
        if(params.id){
            setTask(taskState.find((task: any) => task.id === params.id))
        }

    },[])

  return (
    <div className="el h-screen">
        <h1 className=' text-3xl text-white text-center'>Crear tarea</h1>

    <form onSubmit={submitHandler} className=' grid gap-3 items-start justify-start m-5'>
        <input value={task.title} onChange={handlerChange} name='title' type="text" placeholder='Title' className=' border-2' />
        <textarea value={task.description} onChange={handlerChange} className=' resize-none border-2' name="description" placeholder='description' />
        <button className=' bg-red-400 text-white'>save</button>
    </form>
    </div>
  )
}

export default TaskForm