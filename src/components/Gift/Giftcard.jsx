import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Modal, Button } from "@mui/material";
import '../../styles/style.css';
import DeleteIcon from "@mui/icons-material/Delete";
import person from "../../assets/logosneakbyyan.png";

function Giftcard({ id, name, adress, price, description }) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (giftId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/gifts/${giftId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    console.log("Gift deleted successfully");
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error('Error deleting gift');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Erreur lors de la suppression du cadeau');
            });
    };

    const handleOpen = () => {
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
                        <img src={person} style={{ width: '10%', borderRadius: 100, marginRight: "20px" }} alt="imgPersonne" />
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</p>
                        <button className="buttonsupp" onClick={handleOpen}>
                            <DeleteIcon />
                        </button>
                    </div>
                    <CardMedia
                        sx={{ height: 120, width: 175, margin: 'auto', padding: 2, borderRadius: "20px" }}
                        image={adress}
                        title={adress}
                    />
                    <Typography gutterBottom variant="h6" component="div">
                        {price}€
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
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
                    <h1 id="modal-title">Voulez-vous vraiment supprimer le cadeau ?</h1>
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

export default Giftcard;
