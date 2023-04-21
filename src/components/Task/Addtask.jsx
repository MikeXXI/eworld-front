import React, { useState } from 'react';
import { useNavigate} from "react-router";
import logo from '../../assets/logoeworld.png'
import '../../styles/formconnexion.css'


const Addtask = () => {
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


        fetch('https://eworld-api.osc-fr1.scalingo.io/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))
            .catch(error => console.error(error));

            navigate('/task');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Ajout d'une tache</h1>
                <div>
                    <input placeholder={"Titre"} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input placeholder={"Description"} type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button type="submit">Ajouter une tâche</button>
            </form>
        </div>
    );
};

export default Addtask;
