// Friends.jsx
import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import { Link } from "react-router-dom";

function Friends() {
    const userUtil = localStorage.getItem("user_id");

    const [users, setUsers] = useState([]);
    const [openGiftsModal, setOpenGiftsModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userGifts, setUserGifts] = useState([]);

    const handleSubmit = (userId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/users/${userId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    handleCloseDeleteModal();
                    window.location.reload(); // Rafraîchir la page
                } else {
                    throw new Error("Error deleting link");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Erreur lors de la suppression de l'amitié");
            });
    };

    const modalOpenGifts = (userId) => {
        setSelectedUser(userId);
        setOpenGiftsModal(true);
        fetchGifts(userId);
    };

    const modalOpenDelete = (userId) => {
        setSelectedUser(userId);
        setOpenDeleteModal(true);
    };

    const handleCloseGiftsModal = () => {
        setOpenGiftsModal(false);
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    if (localStorage.getItem("user_id") === null) {
        window.location.href = "/connexion";
    }

    useEffect(() => {
        fetch(
            `https://eworld-api.osc-fr1.scalingo.io/users/${userUtil}/friends`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const usersArray = Object.values(data);
                setUsers(usersArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const fetchGifts = (userId) => {
        const url = `https://eworld-api.osc-fr1.scalingo.io/users/${userId}/gifts`;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUserGifts(data);
            })
            .catch((error) => {
                console.error(error);
                alert("Erreur lors du chargement des cadeaux de l'utilisateur");
            });
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Vos amis</h1>
            <Link to={`/task`} style={{ display: "flex", justifyContent: "center", margin: "3%" }}>
                <button
                    style={{
                        borderRadius: 20,
                        fontSize: "15px",
                        color: "black",
                        fontWeight: "bold",
                        cursor: "pointer",
                        background: "#9CECFF",
                        padding: "10px",
                        textDecoration: "none",
                        border: "none",
                    }}
                >
                    Retour
                </button>
            </Link>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                            <button className="buttonsupp" onClick={() => modalOpenGifts(user.id)}>
                                Voir le contenu de l'utilisateur
                            </button>
                            <button className="buttonsupp" onClick={() => modalOpenDelete(user.id)}>
                                Supprimer des amis
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal
                open={openGiftsModal}
                onClose={handleCloseGiftsModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Liste des cadeaux de l'utilisateur {selectedUser}</h1>
                    {userGifts.length > 0 ? (
                        <ul>
                            {userGifts.map((gift) => (
                                <li key={gift.id}>{gift.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucun cadeau trouvé pour cet utilisateur.</p>
                    )}
                    <Button variant="contained" onClick={handleCloseGiftsModal}>
                        Fermer
                    </Button>
                </div>
            </Modal>
            <Modal
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Voulez-vous vraiment supprimer l'amitié ?</h1>
                    <Button variant="contained" onClick={() => handleSubmit(selectedUser)}>
                        Supprimer
                    </Button>
                    <Button variant="contained" onClick={handleCloseDeleteModal}>
                        Annuler
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "left",
};

const tableCellStyle = {
    padding: "8px",
    border: "1px solid #ddd",
    color: "white",
};

export default Friends;
