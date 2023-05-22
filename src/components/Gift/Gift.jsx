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
    const [giftData, setGiftData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [giftCount, setGiftCount] = useState(0);

    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    const fetchData = () => {
        setLoading(true);
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/gifts")
            .then((res) => res.json())
            .then((data) => {
                setGiftData(data);
                setLoading(false);
                localStorage.setItem('giftCount', data.length);// Mise à jour de giftCount                
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const giftCountFromStorage = localStorage.getItem('nbGift') || 0;
        setGiftCount(parseInt(giftCountFromStorage));
    }, [giftData]);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAddGift = () => {
        fetchData();
    };

    const reversedGiftData = [...giftData].reverse();

    const role = localStorage.getItem('roles');

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
