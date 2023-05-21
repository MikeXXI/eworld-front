import React, { useEffect, useState } from 'react';
import logo from "../assets/logoeworld.png";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";

function ProfilePage() {
    const [imageUrl, setImageUrl] = useState('');
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('imageUrl');
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');
        setUsername(storedUsername);
        setImageUrl(storedImageUrl);
        setUseremail(storedEmail);
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Link to={`/task`} style={{ display: "flex", justifyContent: "center", margin: "3%" }}>
                <img src={logo} alt='logo e-world' className="logoeworldtask" />
            </Link>
            {imageUrl && (
                <img src={imageUrl} style={{ width: '10%', borderRadius: 100, marginBottom: "10px", marginRight: "10px" }}
                     alt="imgPersonne" />
            )}
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginLeft: "50px", marginTop: "50px" }}>
                    <p style={{ padding: "15px", backgroundColor: "white", borderRadius: "20px" }}>Nom : {username}</p>
                    <p style={{ padding: "15px", backgroundColor: "white", borderRadius: "20px" }}>Email : {useremail}</p>
                </div>
            </div>
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
    );
}

export default ProfilePage;
