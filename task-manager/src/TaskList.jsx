import React from "react"
import { useEffect, useState } from "react";

function TaskList({ tasks, handleDeleteTask }) {
    const [apiTask, setApiTask] = useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setApiTask(data))
        .catch((error) => console.error('Error fetching tasks:', error));
        }, []); 

    return (
        <>
<div className='tasks-area'>
    {tasks.map((task, index) => (
        <li key={index}>
        <span className="task-text">{task.text}</span>
        <span className='task-time'>{task.time}</span>
        <button onClick={() => handleDeleteTask(index)}><i class="fa-solid fa-trash"></i></button>
        </li>
      ))}
    </div>

    <div className='tasks-area api'>
        <h4>Ejemplo de Lista (API)</h4>
        <ul>
        {apiTask.map((task) => (
        <li key={task.id}>{task.title}</li>
        ))}
        </ul>
    </div>
        </>
    )
}

export default TaskList