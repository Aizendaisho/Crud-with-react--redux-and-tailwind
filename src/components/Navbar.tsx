import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className=' flex justify-end p-2 items-center gap-3 bg-slate-900 text-white h-12'>
        <Link to="/">Home</Link>
        <Link to="/taskForm">Nueva tarea</Link>

    </nav>
  )
}
