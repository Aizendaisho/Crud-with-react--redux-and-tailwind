import { createSlice } from "@reduxjs/toolkit";

const initialState:any = [

]

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            state.push(action.payload);
            
        },
        deleteTask: (state, action)=>{
            console.log(action.payload)
            const taskFound = state.find((task:any) => task.id === action.payload)
            if(taskFound) {
                state.splice(state.indexOf(taskFound),1)
            }
        },
        taskEdit: (state, action)=>{ 
            console.log(action.payload)
            const {id, description, title} = action.payload
            const foundTask = state.find((task:any) => task.id === id)
            if(foundTask) {
                foundTask.description = description
                foundTask.title = title
            }

        },

    }
})

export const {addTask, deleteTask, taskEdit} = taskSlice.actions

export default taskSlice.reducer