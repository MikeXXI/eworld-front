import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logoeworld.png";
import "../../styles/style.css";

function UserRegistration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://eworld-api.osc-fr1.scalingo.io/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    username,
                    imageUrl,
                }),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem('user_id', data.id);
                localStorage.setItem('username', data.username);
                localStorage.setItem('roles', data.roles[0]);
                localStorage.setItem('imageUrl', data.imageUrl); // Stocke l'URL de l'image dans le localStorage

                console.log('Inscription réussie !');
                window.location.href = '/task';
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.log('Erreur lors de la requête :', error);
            setError('Erreur lors de l\'inscription');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logo} alt='logo e-world' className="logoeworld" />
            <h1 style={{ fontSize: '40px', marginBottom: '20px', color: '#5E8CFF', }}>Inscription</h1>
            {error && (
                <p style={{
                    color: 'red',
                    marginBottom: '16px',
                    textAlign: 'center',
                    maxWidth: '300px',
                    fontWeight: "bold",
                    border: "1px solid",
                    padding: "10px",
                    background: "antiquewhite"
                }}>
                    {error}
                </p>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "black" }}>
                <label style={{ marginBottom: '15px', padding: "10px", background: "white", borderRadius: "20px" }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                    <input
                        style={{ padding: '8px', border: "none" }}
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label style={{ marginBottom: '15px', padding: "10px", background: "white", borderRadius: "20px" }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                    <input
                        style={{ padding: '8px', border: "none" }}
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label style={{ marginBottom: '15px', padding: "10px", background: "white", borderRadius: "20px" }}>
                    <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
                    <input
                        style={{ padding: '8px', border: "none" }}
                        placeholder="Mot de passe"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <input placeholder={"Lien photo profil"}  type="text" id="adress" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </label>
                <Link to='/'>
                    <button style={{ margin: '20px', color: '#007BFF', cursor: 'pointer', background: "none", border: "none" }}>
                        Retour sur eworld-front.vercel.app
                    </button>
                </Link>
                <button style={{ padding: '10px 15px', background: '#5E8CFF', color: 'black', border: 'none', borderRadius: '20px', cursor: 'pointer' }} type="submit">
                    S'inscrire
                </button>
            </form>
        </div>
    );
}

export default UserRegistration;
