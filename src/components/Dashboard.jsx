import React, {useEffect, useState} from 'react';
import {Button, Modal} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from "react-router-dom";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);

    const handleSubmit = (userId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/user/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error('Error deleting user');
                }
            })
            .catch(error => {
                console.error(error);
                alert("Erreur lors de la suppression de l'utilisateur");
            });
    };

    const modalOpen = (userId) => {
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
        fetch('https://eworld-api.osc-fr1.scalingo.io/user', {
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
            <h1 style={{textAlign: 'center'}}>Dashboard</h1>
            <Link to={`/task`} style={{display: "flex", justifyContent: "center", margin: "3%"}}>
                <button style={{
                    borderRadius: 20,
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                    background: "#9CECFF",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                }}>
                    Retour
                </button>
            </Link>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
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
                            <button className="buttonsupp" onClick={() => modalOpen(user.id)}>
                                <DeleteIcon/>
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
                    <h1 id="modal-title">Voulez-vous vraiment supprimer l'utilisateur ?</h1>
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

export default Dashboard;
