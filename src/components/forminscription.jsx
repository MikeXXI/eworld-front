import React, { useState } from 'react';
import '../styles/forminscription.css'
import logo from '../assets/logoeworld.png'

const Inscription = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Soumission du formulaire avec les données:', { nom, prenom, email, password });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Inscription</h1>
                <div>
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="prenom">Prénom :</label>
                    <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;
