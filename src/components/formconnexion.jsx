import React, { useState } from "react";
import '../styles/formconnexion.css'
import logo from '../assets/logoeworld.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <img src={logo} alt='logo e-world' className='lmj-logo' />
            <h1>Connexion</h1>
            <label htmlFor="username" className="icon-label">
                <FontAwesomeIcon icon={faUser} />
            </label>
                <input
                    type="email"
                    placeholder={"Email"}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            <label htmlFor="username" className="icon-label">
                <FontAwesomeIcon icon={faLock} />
            </label>
                <input
                    placeholder={"Password"}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit">Connexion</button>
        </form>
    );
};

export default LoginForm;
