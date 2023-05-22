import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Grid, Modal, Button, TextField} from "@mui/material";
import "../../styles/style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Giftcard({id, name, adress, price, description}) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedAddress, setEditedAddress] = useState(adress);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedDescription, setEditedDescription] = useState(description);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const storedImageUrl = localStorage.getItem("imageUrl");
        setImageUrl(storedImageUrl);
    }, []);

    const handleSubmit = (giftId) => {
        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/gifts/${giftId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Gift deleted successfully");
                    handleClose();
                    window.location.reload(); // Refresh the page
                } else {
                    throw new Error("Error deleting gift");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Erreur lors de la suppression du cadeau");
            });
    };

    const handleUpdate = (id) => {
        const updatedGift = {
            name: editedName,
            address: editedAddress,
            price: editedPrice,
            description: editedDescription,
        };

        fetch(`https://eworld-api.osc-fr1.scalingo.io/api/gifts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedGift),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Gift updated successfully");
                    setEditing(false);
                    window.location.reload();
                } else {
                    throw new Error("Error updating gift");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Erreur lors de la mise à jour du cadeau");
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
                position: "center",
                width: 1500,
            }}
            className="gridCard"
        >
            <Card className="cardContent">
                <CardContent>
                    <div className="titleSup">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                style={{width: "8%", borderRadius: 100, marginRight: "20px"}}
                                alt="imgPersonne"
                            />
                        )}
                        <p style={{fontSize: "20px", fontWeight: "bold"}}>{name}</p>
                        <div style={{display:"flex", flexDirection: "row"}}>
                            <button className="buttonsupp" onClick={handleEdit}>
                                <EditIcon/>
                            </button>
                            <button className="buttonsupp" onClick={handleOpen}>
                                <DeleteIcon/>
                            </button>
                        </div>
                    </div>
                    <CardMedia
                        sx={{
                            height: 120,
                            width: 175,
                            margin: "auto",
                            padding: 2,
                            borderRadius: "20px",
                        }}
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
            <Modal
                open={editing}
                onClose={handleCancel}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="modal-content">
                    <h1 id="modal-title">Modifier le cadeau</h1>
                    <TextField
                        label="Nom"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        label="Adresse"
                        value={editedAddress}
                        onChange={(e) => setEditedAddress(e.target.value)}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        label="Prix"
                        value={editedPrice}
                        onChange={(e) => setEditedPrice(e.target.value)}
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

export default Giftcard;
