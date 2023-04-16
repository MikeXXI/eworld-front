import React, { useState } from 'react';
import logo from '../assets/logoeworld.png'

const Inscription = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const user_id ="/api/users/1"

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Ajout de la tache:', { title, description, user_id });
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
