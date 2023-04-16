import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logoeworld.png';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='container'>
            <img src={logo} alt='logo e-world' className='lmj-logo' />
            <h1>Bienvenue sur E-WORLD</h1>
            <div className='divbutton'>
                <Link to={`/log`}>
                    Connexion
                </Link>
                <Link to={`/register`}>
                    Inscription
                </Link>
            </div>
            <p className='paraEworld'>E-WORLD est dédié à la planification de tâches et à l'organisation de cadeaux communs. Toutes vos planifications sont accessibles sur une sphère, ce qui vous permet de collaborer facilement avec d'autres personnes. Avec cette fonctionnalité, vous pouvez travailler en équipe sur des projets ou des événements, tout en ayant une vue d'ensemble de toutes les tâches en cours.</p>
            <p className='dispoMobil'>Disponible sur mobile</p>
        </div>
    );
}

export default HomePage;
