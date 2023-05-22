import React, { useEffect, useState } from 'react';
import { Button, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useParams } from "react-router-dom";

function FriendDetails() {

    const userUtil =useParams();
    const [open, setOpen] = useState(false);
    console.log("J'affiche:",userUtil);

    if (localStorage.getItem('user_id') === null) {
                window.location.href = '/connexion';
            }

            useEffect(() => {
                        fetch(`http://127.0.0.1:8000/api/task/`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }, []);

    const handleClose = () => {
                setOpen(false);
            };
            const modalOpen = (userId) => {
                        setOpen(true);
                    };
    return (
                    <Modal
                        open={open}
                        onClose={modalOpen}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <div className="modal-content">
                            <h1 id="modal-title"></h1>
                            <Button variant="contained" >
                                Supprimer
                            </Button>
                            <Button variant="contained" onClick={handleClose}>
                                Annuler
                            </Button>
                        </div>
                    </Modal>        
            );
        
}

//     const [users, setUsers] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [userId, setUserId] = useState(null);

//     const handleSubmit = (userId) => {
//         fetch(``, {
//             method: 'DELETE'
//         })
//             .then(response => {
//                 if (response.ok) {
//                     handleClose();
//                     window.location.reload(); // Refresh the page
//                 } else {
//                     throw new Error('Error deleting link');
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//                 alert("Erreur lors de la suppression de l'amitié");
//             });
//     };

//     const modalOpen = (userId) => {
//         setUserId(userId);
//         setOpen(true);
//     };
//     const modalOpen2 = (userId) => {
//         setUserId(userId);
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     if (localStorage.getItem('user_id') === null) {
//         window.location.href = '/connexion';
//     }

//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/users/${userUtil}/friends`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 // Convertir les utilisateurs en un tableau
//                 const usersArray = Object.values(data);
//                 setUsers(usersArray);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-title"
//                 aria-describedby="modal-description"
//             >
//                 <div className="modal-content">
//                     <h1 id="modal-title">Voulez-vous vraiment supprimer l'amitié ?</h1>
//                     <Button variant="contained" onClick={() => handleSubmit(userId)}>
//                         Supprimer
//                     </Button>
//                     <Button variant="contained" onClick={handleClose}>
//                         Annuler
//                     </Button>
//                 </div>
//             </Modal>        
//     );
// }

// const tableHeaderStyle = {
//     backgroundColor: '#f2f2f2',
//     padding: '8px',
//     textAlign: 'left',
// };

// const tableCellStyle = {
//     padding: '8px',
//     border: '1px solid #ddd',
//     color: 'white',
// };

export default FriendDetails;
