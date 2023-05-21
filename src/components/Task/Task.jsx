import React, {useEffect, useState} from 'react';
import {Grid, Fab, Dialog, DialogContent} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasklist from './Tasklist';
import Weather from '../Weather';
import {Link} from 'react-router-dom';
import '../../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import Addtask from '../Task/Addtask';
import Header from '../Header';
import CircularProgress from "@mui/material/CircularProgress";
import sphere from "../../assets/sphère3d.png";

function Task() {
    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const nbTask = localStorage.getItem('nbTask');

    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    const fetchData = () => {
        setLoading(true);
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/tasks")
            .then((res) => res.json())
            .then((data) => {
                setTaskData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAddTask = () => {
        fetchData();
    };

    const reversedTaskData = [...taskData].reverse();

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
                    <CircularProgress/>
                </Grid>
            ) : (
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="container_weather_taskgift">
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: "15%"}}
                         className="weather_sphere">
                        <Weather/>
                        <img src={sphere} style={{width: "20vw", borderRadius: 100, marginTop: "50px"}} alt="sphere"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}} className="container_task_gift">
                        <div style={{display: "flex", alignItems: "center"}} className="container_add">
                            <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
                                <AddIcon/>
                            </Fab>
                            <Link to={`/task`}
                                  style={{marginLeft: "50px", textDecoration: "none", borderBottom: "2px solid white"}}>
                                <p style={{
                                    fontSize: "40px",
                                    margin: "20px",
                                    color: "white",
                                    fontWeight: "100"
                                }}>({nbTask}) Tâches</p>
                            </Link>
                            <Link to={`/gift`} style={{marginLeft: "50px", textDecoration: "none"}}>
                                <p style={{
                                    fontSize: "40px",
                                    margin: "20px",
                                    color: "white",
                                    fontWeight: "100"
                                }}>Cadeaux</p>
                            </Link>
                        </div>
                        <Grid>
                            <Tasklist taskData={reversedTaskData}/>
                        </Grid>
                    </div>
                </div>
            )}

            {/* Modal */}
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogContent style={{background: "#9CECFF", borderRadius: "20px"}}>
                    <Addtask onCloseModal={handleCloseModal} onAddTask={handleAddTask}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Task;
