import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import Navbar from '../components/Navbar'

export default function AppRoutes() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<TaskList/>}/>
                <Route path="/taskForm" element={<TaskForm/>}/>
                <Route path="/edit-task/:id" element={<TaskForm/>}/>
            </Routes>
        </Router>
    </div>
  )
}
