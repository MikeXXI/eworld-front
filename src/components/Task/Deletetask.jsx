import React from 'react';
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from '../../assets/logoeworld.png'

const Deletetask = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => {
                console.log(response.data);
                navigate('/task');
            })
            .catch(error => {
                console.log(error);
                alert('Erreur lors de la suppression de la tâche')
            });
        
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Voulez vous vraiment supprimer la tache?</h1>
                <button type="submit">Supprimer</button>
            </form>
            <Link to='/task'>
                <button>Retour</button>
            </Link>
        </div>
    );
};
export default Deletetask;
