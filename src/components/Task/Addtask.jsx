import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Addtask = ({ onCloseModal, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const user_id = localStorage.getItem('user_id');
    const userIdNumber = user_id ? user_id.split('/').pop() : null;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            description: description,
            userId: userIdNumber
        }
        const jsonData = JSON.stringify(data);
        fetch('https://eworld-api.osc-fr1.scalingo.io/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => response.json())
            .then(jsonData => {
                toast.success('Tâche créée avec succès');
                onAddTask(); // Appeler la fonction onAddTask pour mettre à jour la liste des tâches
                onCloseModal(); // Fermer la modal
            })
            .catch(error => console.error(error));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ color: "#111B2E", fontWeight: 500, fontSize: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>Ajout d'une tâche</h1>
                <div>
                    <input placeholder={"Titre"} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px" }} />
                </div>
                <div>
                    <input placeholder={"Description"} type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px" }} />
                </div>

                <button type="submit" style={{ backgroundColor: '#111B2E', color: "white", border: "none", borderRadius: '20px', padding: "15px", cursor: "pointer" }}>Ajouter une tâche</button>
            </form>
        </div>
    );
};

export default Addtask;
