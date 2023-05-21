import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import logo from "../assets/logoeworld.png";
import {Link} from 'react-router-dom';
import '../styles/style.css';
import CurrentDate from "./CurrentDate";
import SettingsIcon from '@mui/icons-material/Settings';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedImageUrl = localStorage.getItem('imageUrl');
        setImageUrl(storedImageUrl);
        console.log("image :", storedImageUrl);
        setUsername(storedUsername);
    }, []);

    return (
        <div className="divHeader">
            <h1>Bienvenue,<br/> {username}</h1>
            <Link to={`/task`} style={{display: "flex", justifyContent: "center"}}>
                <img src={logo} alt='logo e-world' className="logoeworldtask"/>
            </Link>
            <Link to={`/Profil`} style={{display: "none"}} className="settingsmobil">
                <SettingsIcon style={{color: "white"}}/>
            </Link>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}} className="headerProfil">
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            style={{width: '15%', borderRadius: 100, marginBottom: "10px", marginRight: "10px"}}
                            alt="imgPersonne"
                        />
                    )}
                    <Link to={`/Profil`}>
                        <SettingsIcon style={{color: "white"}}/>
                    </Link>
                </div>
                <CurrentDate/>
                <Link to={`/logout`}>
                    <Button variant="outlined" size="large" sx={{
                        backgroundColor: '#5E8CFF',
                        marginTop: "10px",
                        color: 'black',
                        borderRadius: '20px',
                        '&:hover': {backgroundColor: '#111B2E', color: 'white'},
                    }}>Deconnexion</Button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
