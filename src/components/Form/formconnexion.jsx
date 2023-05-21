import React, {useState} from 'react';
import logo from "../../assets/logoeworld.png";
import "../../styles/style.css"
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://eworld-api.osc-fr1.scalingo.io/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                response.json().then((data) => {
                    localStorage.setItem('user_id', data.id);
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('roles', data.roles[0]);
                    localStorage.setItem('imageUrl', data.imageUrl); 
                    console.log('Connexion réussie !');
                    window.location.href = '/task';
                });           
            } else {
                // Une erreur s'est produite lors de la connexion
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.log('Erreur lors de la requête :', error);
            setError('Erreur lors de la requête');
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={logo} alt='logo e-world' className="logoeworld"/>
            <h1 style={{fontSize: '40px', marginBottom: '20px', color: '#5E8CFF',}}>Connexion</h1>
            {error && (
                <p style={{color: 'red', marginBottom: '16px', textAlign: 'center', maxWidth: '300px', fontWeight: "bold", border: "1px solid", padding: "10px", background: "antiquewhite"}}>
                    {error}
                </p>
            )}
            <form onSubmit={handleSubmit}
                  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: "black"}}>
                <label style={{marginBottom: '15px', padding: "10px", background: "white", borderRadius: "20px"}}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{border: "none"}}
                    />
                </label>
                <label style={{marginBottom: '15px', padding: "10px", background: "white", borderRadius: "20px"}}>
                    <FontAwesomeIcon icon={faLock} style={{ marginRight: '10px' }} />
                    <input
                        type="password"
                        value={password}
                        placeholder="Mot de passe"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{border: "none"}}
                    />
                </label>
                <Link to='/'>
                    <button style={{
                        margin: '20px',
                        color: '#007BFF',
                        cursor: 'pointer',
                        background: "none",
                        border: "none"
                    }}>
                        Retour sur eworld-front.vercel.app
                    </button>
                </Link>
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        background: '#5E8CFF',
                        color: 'black',
                        border: 'none',
                        borderRadius: '20px',
                        cursor: 'pointer',
                    }}
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
}

export default UserLogin;
