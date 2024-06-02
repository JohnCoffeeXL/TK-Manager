import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './TaskList'
import Home from './Home'
import Contact from './Contact'
import Users from "./Users"

function App() {
  
  return (
    <>
<Router>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/users">Users</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/tasks">Tasks</Link></li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/users" element={<Users />} />
<Route path="/contact" element={<Contact />} />
<Route path="/tasks" element={<TaskList />} />
</Routes>
</Router>
  <footer>
    <p><a href="https://juan-agustin-avalos.netlify.app/">Creado por Juan A. | © - Todos los derechos reservados 2024</a></p>
  </footer>
    </>
  )
}

export default App;
