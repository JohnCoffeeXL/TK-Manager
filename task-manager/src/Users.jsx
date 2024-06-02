import React from "react"
import { useEffect, useState } from "react";

function TaskList() {
    const [users, setUsers] = useState([]);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = "https://664e3a74fafad45dfadf7462.mockapi.io/Users"; 

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error al obtener usuarios:", error))
        .finally(() => {
        setLoading(false);
        });
        }, [apiUrl]);

        const handleCreateUser = () => {
            fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newUserName }),
            })
            .then((response) => response.json())
            .then(() => {
            setNewUserName('');
            })
            .then(() => {
            return fetch(apiUrl);
            })
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error.message));
            };

            const handleUpdateUser = () => {
                if (!selectedUser) return;
                
                fetch(`${apiUrl}/${selectedUser.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newUserName }),
                })
                .then((response) => response.json())
                .then((updatedUser) => {
                setUsers(users.map((user) => (user.id === selectedUser.id ? updatedUser : user)));
                setNewUserName('');
                setSelectedUser(null);
                })
                .catch((error) => console.error('Error al actualizar usuario:', error));
                };   

                const handleDeleteUser = (userId) => {
                    fetch(`${apiUrl}/${userId}`, {
                    method: 'DELETE',
                    })
                    .then(() => {
                    setUsers(users.filter((user) => user.id !== userId));
                    setNewUserName('');
                    setSelectedUser(null);
                    })
                    .catch((error) => console.error('Error al eliminar usuario:', error));
                    };
        
        useEffect(() => {
            console.log("Loading state:", loading);
            console.log("Users array:", users);
        }, [loading, users]);
    return (
        <>
        <div>Users</div>
        <br></br>
<div className="tasks-area api">
<h2>Lista de Usuarios</h2>
{loading ?
(<h1>Cargando...</h1>) :
( <ul>
{users.map((user) => (
<li className="user-id"  key={user.id}>
{user.name}
<button className='firstBtn' onClick={() => setSelectedUser(user)}>Editar</button>
<button className="delete" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
</li>
))}
</ul>)}
<div>
<input className="edit-user"
type="text"
value={newUserName}
onChange={(e) => setNewUserName(e.target.value)}
placeholder="Nombre del Usuario"/>
{selectedUser ? (
<button onClick={handleUpdateUser}>Actualizar Usuario</button>
) : (
<button onClick={handleCreateUser}>Crear Usuario</button>
)}
</div>
</div>
        </>
    )
}

export default TaskList