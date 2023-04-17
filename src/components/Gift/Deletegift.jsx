import React from 'react';
import { useParams, useNavigate } from "react-router";

import { Link } from "react-router-dom";
import logo from '../../assets/logoeworld.png'

const Deletegift= () => {

    const { giftId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://127.0.0.1:8000/api/gifts/${giftId}`, {
            method: 'DELETE'
        })
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });

        navigate('/gift');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Voulez vous vraiment supprimer le cadeaux?</h1>
                <button type="submit">Supprimer</button>
            </form>
            <Link to='/task'>
                <button>Retour</button>
            </Link>

        </div>


    );
};

export default Deletegift;
