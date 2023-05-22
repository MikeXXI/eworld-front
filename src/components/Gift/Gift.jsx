import React, { useEffect, useState } from 'react';
import { Box, Grid, Fab, Dialog, DialogContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Weather from '../Weather';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import CircularProgress from "@mui/material/CircularProgress";
import Giftlist from './Giftlist';
import sphere from "../../assets/sphère3d.png";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Addgift from "../Gift/Addgift";
import Header from '../Header';

function Gift() {
    //Utilisation de hooks pour gérer l'état du composant
    const [giftData, setGiftData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [giftCount, setGiftCount] = useState(0);

    //Vérification si l'ID de l'utilisateur est présent dans le stockage local, sinon redirection vers la page de connexion
    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    //Définition d'une fonction fetchData qui récupère les données des cadeaux depuis une API
    const fetchData = () => {
        setLoading(true);
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/gifts")
            .then((res) => res.json())
            .then((data) => {
                setGiftData(data);
                setLoading(false);
                localStorage.setItem('giftCount', data.length);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    //Utilisation de useEffect pour exécuter fetchData une fois que le composant est monté
    useEffect(() => {
        fetchData();
    }, []);

    // Utilisation de useEffect pour mettre à jour giftCount à chaque changement de giftData
    useEffect(() => {
        const giftCountFromStorage = localStorage.getItem('nbGift') || 0;
        setGiftCount(parseInt(giftCountFromStorage));
    }, [giftData]);

    //Définition de fonctions pour ouvrir et fermer un dialogue modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Définition d'une fonction handleAddGift pour exécuter fetchData lorsqu'un nouveau cadeau est ajouté
    const handleAddGift = () => {
        fetchData();
    };

    // Création d'une copie inversée des données des cadeaux
    const reversedGiftData = [...giftData].reverse();

    // Récupération du rôle de l'utilisateur à partir du stockage local
    const role = localStorage.getItem('roles');

    // Rendu du composant
    return (
        <div>
            <ToastContainer/>
            <Header/>
            {role === 'ADMIN' && (
                <Link to="/dashboard"
                      style={{marginLeft: "50px", textDecoration: "none", display: "flex", justifyContent: "center"}}>
                    <button style={{
                        borderRadius: 20,
                        fontSize: "15px",
                        margin: "20px",
                        color: "black",
                        fontWeight: "bold",
                        cursor: "pointer",
                        background: "#9CECFF",
                        padding: "10px",
                        border: "none",
                    }}>
                        Dashboard ADMIN
                    </button>
                </Link>
            )}
            {loading ? (
                <Grid>
                    <Box sx={{display: "flex"}}>
                        <CircularProgress/>
                    </Box>
                </Grid>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="container_weather_taskgift">
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "15%" }} className="weather_sphere">
                        <Weather/>
                        <img src={sphere} style={{ width: "20vw", borderRadius: 100, marginTop: "50px" }} alt="sphere"/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className="container_task_gift">
                        <div style={{ display: "flex", alignItems: "center" }} className="container_add">
                            <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
                                <AddIcon/>
                            </Fab>
                            <Link to={`/task`} style={{ marginLeft: "50px", textDecoration: "none" }}>
                                <p style={{ fontSize: "40px", margin: "20px", color: "white", fontWeight: "100" }}>Tâches</p>
                            </Link>
                            {giftCount !== undefined && (
                                <Link to={`/gift`} style={{ marginLeft: "50px", textDecoration: "none", borderBottom: "2px solid white" }}>
                                    <p style={{ fontSize: "40px", margin: "20px", color: "white", fontWeight: "100" }}>({giftCount}) Cadeaux</p>
                                </Link>
                            )}
                        </div>
                        <Grid>
                            <Giftlist giftData={reversedGiftData}/>
                        </Grid>
                    </div>
                </div>
            )}

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogContent style={{ background: "#9CECFF", borderRadius: "20px" }}>
                    <Addgift onCloseModal={handleCloseModal} onAddGift={handleAddGift} giftCount={giftCount}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Gift;
