import React from "react"
import { useEffect, useState } from "react";

function TaskList() {
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');  
const [taskTime, setTaskTime] = useState('-');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasksToSave) => {
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTaskTime(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = { text: newTask, time: taskTime };
      const updatedTasks = [...tasks, newTaskObject];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setNewTask('');
      setTaskTime('-');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

    return (
        <>
        <div>Tasks</div>
    <div className='container'>
    <h1>TK-Manager</h1>
    <h5>-Hecho por Juan Agustín Avalos🙃-</h5>
    <div className='task-content'>
      <h2 className='task-title'>Tarea<b>*</b></h2>
      <input type="text" placeholder='Escribe la tarea a realizar...' value={newTask} onChange={handleInputChange}/>
    </div>
    <div className='task-content'>
    <h2 className='task-title'>Horario</h2>
    <input type="time" value={taskTime} onChange={handleTimeChange}/>
    </div>
    <br />
    <button onClick={handleAddTask}>Agregar tarea</button>
    <div className='tasks-area'>
    {tasks.map((task, index) => (
        <li key={index}>
        <span className="task-text">{task.text}</span>
        <span className='task-time'>{task.time}</span>
        <button onClick={() => handleDeleteTask(index)}><i class="fa-solid fa-trash"></i></button>
        </li>
      ))}
    </div>
    <ul>
    </ul>    
  </div>
        </>
    )
}

export default TaskList