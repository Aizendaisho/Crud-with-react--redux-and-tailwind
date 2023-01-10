import { useDispatch,useSelector } from "react-redux";

import React from 'react'
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

const Task = () => {
   const taskState = useSelector((state:any) => state.task)
  return (
    <div>Task
        {/* {taskState.map((task:any) => <div key={task}>{task}</div> )} */}

    </div>
  )
}

export default Task