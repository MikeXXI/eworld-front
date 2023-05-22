import React, { useEffect, useState } from 'react';
import { Button, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function Friends() {

    const userUtil = localStorage.getItem('user_id');

    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [email, setEmail] = useState('');

    const handleSubmit = (userId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/users/${userUtil}/friends/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error('Error deleting link');
                }
            })
            .catch(error => {
                console.error(error);
                alert("Erreur lors de la suppression de l'amitié");
            });
    };
    const handleSubmit2 = (email) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/users/${userUtil}/friends/${email}`, {
            method: 'POST'
        })
            .then(response => {
                if (response.ok) {
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error('Error add friend ');
                }
            })
            .catch(error => {
                console.error(error);
                alert("Erreur requete");
            });
    };

    const modalOpen = (userId) => {
        setUserId(userId);
        setOpen(true);
    };
    const modalOpen2 = (userId) => {
        setUserId(userId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    useEffect(() => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/users/${userUtil}/friends`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // Convertir les utilisateurs en un tableau
                const usersArray = Object.values(data);
                setUsers(usersArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Vos amis</h1>
            <Button variant="contained" onClick={() => window.location.href = "/task"}>
                Retour
            </Button>
            <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: "none" }}

                />

                    <Button variant="contained" onClick={() => handleSubmit2(email)}>
                        Ajouter un ami
                    </Button>           
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Email</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={tableCellStyle}>{user.id}</td>
                            <td style={tableCellStyle}>{user.email}</td>
                            <td style={tableCellStyle}>
                                <Link to={`/friends/${user.id}/list`}>
                                    <button className="buttonsupp">
                                        Voir les contenu de l'utilisateur
                                    </button>
                                </Link>
                                <button className="buttonsupp" onClick={() => modalOpen(user.id)}>
                                    Supprimer des amis
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Voulez-vous vraiment supprimer l'amitié ?</h1>
                    <Button variant="contained" onClick={() => handleSubmit(userId)}>
                        Supprimer
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Annuler
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',
};

const tableCellStyle = {
    padding: '8px',
    border: '1px solid #ddd',
    color: 'white',
};

export default Friends;