import React, { useState } from 'react';
import { useNavigate} from "react-router";
import logo from '../../assets/logoeworld.png'

const Inscription = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const user_id = "/api/users/1"

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            description: description,
            userId: user_id
        }
        const jsonData = JSON.stringify(data);


        fetch('http://127.0.0.1:8000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData), alert('Tâche ajoutée'))
            .catch(error => console.error(error));

            navigate('/task');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Ajout d'une tache</h1>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button type="submit">Ajouter une tâche</button>
            </form>
        </div>
    );
};

export default Inscription;
