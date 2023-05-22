import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Modal, Button, TextField } from "@mui/material";
import '../../styles/style.css';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Taskcard({ id, title, description }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('imageUrl');
        setImageUrl(storedImageUrl);
    }, []);

    const handleSubmit = (taskId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    handleClose();
                    window.location.reload(); // Rafraîchir la page
                } else {
                    throw new Error('Error deleting task');
                }
            })
            .catch(error => {
                alert('Erreur lors de la suppression de la tâche');
            });
    };

    const handleUpdate = (id) => {
        const updatedTask = {
            title: editedName,
            description: editedDescription,
        };

        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Task updated successfully");
                    setEditing(false);
                    window.location.reload();
                } else {
                    throw new Error("Error updating task");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Erreur lors de la mise à jour de la tâche");
            });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    return (
        <Grid
            sx={{
                position: 'center',
                width: 1500,
            }}
            className="gridCard"
        >
            <Card className="cardContent">
                <CardContent>
                    <div className="titleSup">
                        <div style={{ margin: 0, display: "flex", alignItems: "center", textTransform: "uppercase", fontWeight: "900" }}>
                            {imageUrl && (
                                <img src={imageUrl} style={{ width: '8%', borderRadius: 100, marginRight: "20px" }} alt="imgPersonne" />
                            )}
                                {title}
                        </div>
                        <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="buttonsupp" onClick={handleEdit}>
                                <EditIcon />
                            </button>
                            <button className="buttonsupp" onClick={handleOpen}>
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                    <Typography gutterBottom variant="h6" component="div" className="description">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Voulez-vous vraiment supprimer la tâche ?</h1>
                    <Button variant="contained" onClick={() => handleSubmit(id)}>
                        Supprimer
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Annuler
                    </Button>
                </div>
            </Modal>
            <Modal
                open={editing}
                onClose={handleCancel}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Modifier la tâche</h1>
                    <TextField
                        label="Nom"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                    />
                    <Button variant="contained" onClick={() => handleUpdate(id)}>
                        Modifier
                    </Button>
                    <Button variant="contained" onClick={handleCancel}>
                        Annuler
                    </Button>
                </div>
            </Modal>
        </Grid>
    );
}

export default Taskcard;
