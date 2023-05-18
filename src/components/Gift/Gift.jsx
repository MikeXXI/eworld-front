import React, {useEffect, useState} from 'react';
import {Box, Grid, Fab, Button, DialogContent, Dialog} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Weather from '../Weather';
import logo from "../../assets/logoeworld.png";
import person from "../../assets/logosneakbyyan.png";
import {Link} from 'react-router-dom';
import '../../styles/style.css';
import CircularProgress from "@mui/material/CircularProgress";
import CurrentDate from "../CurrentDate";
import Giftlist from './Giftlist';
import sphere from "../../assets/sphère3d.png";
import SettingsIcon from "@mui/icons-material/Settings";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import Addgift from "../Gift/Addgift";

function Gift() {
    const [giftData, setGiftData] = useState([]);
    const [load, isLoad] = useState(true);
    const [openModal, setOpenModal] = useState(false); // État pour contrôler l'ouverture/fermeture de la modal

    useEffect(function () {
        isLoad(true);
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/gifts")
            .then((res) => res.json())
            .then((data) => {
                isLoad(false);
                setGiftData(data);
                console.log(data);
            });
    }, []);

    const giftCount = giftData.length;

    const handleOpenModalgift = () => {
        setOpenModal(true);
    };

    const handleCloseModalGifts = () => {
        setOpenModal(false);
    };

    const handleAddGift = () => {
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/gifts")
            .then((res) => res.json())
            .then((data) => {
                setGiftData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <ToastContainer/>
            <div className="divHeader">
                <h1>Bienvenue,<br/> Marion</h1>
                <img src={logo} alt='logo e-world' className="logoeworld"/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}} className="headerProfil">
                    <div
                        style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <img src={person}
                             style={{width: '15%', borderRadius: 100, marginBottom: "10px", marginRight: "10px"}}
                             alt="imgPersonne"/>
                        <Link to={`/Profil`}>
                            <SettingsIcon style={{color: "white"}}/>
                        </Link>
                    </div>
                    <CurrentDate/>
                    <Link to={`/`}>
                        <Button variant="outlined" size="large" sx={{
                            backgroundColor: '#5E8CFF',
                            marginTop: "10px",
                            color: 'black',
                            borderRadius: '20px',
                            '&:hover': {backgroundColor: '#111B2E', color: 'white'}
                        }}>Deconnexion</Button>
                    </Link>
                </div>
            </div>
            {load ? (
                <Grid>
                    <Box sx={{display: "flex"}}>
                        <CircularProgress/>
                    </Box>
                </Grid>
            ) : (
                <div style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
                     className="container_weather_taskgift">
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: "10%"}}
                         className="weather_sphere">
                        <Weather/>
                        <img src={sphere} style={{width: 300, borderRadius: 100, marginTop: "5%"}} alt="imgPersonne"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}} className="container_task_gift">
                        <div style={{display: "flex", alignItems: "center"}} className="container_add">
                                <Fab color="primary" aria-label="add" onClick={handleOpenModalgift}>
                                    <AddIcon/>
                                </Fab>
                            <Link to={`/task`} style={{marginLeft: "50px", textDecoration: "none"}}>
                                <p style={{
                                    fontSize: "40px",
                                    margin: "20px",
                                    color: "white",
                                    fontWeight: "100"
                                }}>Tâches</p>
                            </Link>
                            <Link to={`/gift`}
                                  style={{marginLeft: "50px", textDecoration: "none", borderBottom: "2px solid white"}}>
                                <p style={{
                                    fontSize: "40px",
                                    margin: "20px",
                                    color: "white",
                                    fontWeight: "100"
                                }}>({giftCount}) Cadeaux</p>
                            </Link>
                        </div>
                        <Grid>
                            <Giftlist giftData={giftData}/>
                        </Grid>
                    </div>
                </div>
            )}

            <Dialog open={openModal} onClose={handleCloseModalGifts}>
                <DialogContent style={{ background: "#9CECFF", borderRadius: "20px" }}>
                    <Addgift onCloseModal={handleCloseModalGifts} onAddGift={handleAddGift} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Gift;
