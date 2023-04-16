import React, { useState } from 'react';
import '../styles/forminscription.css'
import logo from '../assets/logoeworld.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

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
        <div className="divinscription">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Inscription</h1>
                <div className="inputlabel">
                <div>
                    <label htmlFor="username" className="icon-label">
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input className="input-with-icon" placeholder="Nom" type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="username" className="icon-label">
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input placeholder="Prénom" type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="username" className="icon-label">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                    <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" className="icon-label">
                        <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input placeholder="Mot de passe" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                    <button type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    );
};

export default Inscription;
