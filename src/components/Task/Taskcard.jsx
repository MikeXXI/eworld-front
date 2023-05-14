import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Modal, Button } from "@mui/material";
import '../../styles/style.css';
import DeleteIcon from "@mui/icons-material/Delete";
import person from "../../assets/logosneakbyyan.png";

function Taskcard({ id, title, description }) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (taskId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    console.log("Task deleted successfully");
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error('Error deleting task');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Erreur lors de la suppression de la tâche');
            });
    };

    const modalOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        <div style={{ margin: 0, display: "flex", alignItems: "center", textTransform: "uppercase", fontWeight: "900"}}>
                            <img src={person} style={{ width: '10%', borderRadius: 100 }} alt="imgPersonne" />
                            {title}
                        </div>
                        <button className="buttonsupp" onClick={modalOpen}>
                            <DeleteIcon />
                        </button>
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
        </Grid>
    );
}

export default Taskcard;
