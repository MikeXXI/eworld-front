import React, {useEffect, useState} from 'react';
import {Box, Grid, Fab, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasklist from './Tasklist';
import Weather from '../Weather';
import logo from "../../assets/logoeworld.png";
import person from "../../assets/logosneakbyyan.png";
import sphere from "../../assets/sphère3d.png";
import {Link} from 'react-router-dom';
import '../../styles/style.css';
import CircularProgress from "@mui/material/CircularProgress";
import CurrentDate from "../CurrentDate";

function Task() {
    const [taskData, setTaskData] = useState([]);
    const [load, isLoad] = useState(true);

    useEffect(function () {
        isLoad(true);
        fetch("https://eworld-api.osc-fr1.scalingo.io/api/tasks")
            .then((res) => res.json())
            .then((data) => {
                isLoad(false);
                setTaskData(data);
                console.log(data);
            });
    }, []);

    const taskCount = taskData.length;

    return (
        <div>
            <div className="divHeader">
                <h1>Bienvenue,<br/> Marion</h1>
                <img src={logo} alt='logo e-world'/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                    <img src={person} style={{width: '15%', borderRadius: 100, marginBottom: "10px"}}
                         alt="imgPersonne"/>
                    <CurrentDate/>
                    <Link to={`/`}>
                        <Button variant="outlined" size="large" sx={{
                            backgroundColor: '#5E8CFF',
                            marginTop: "10px",
                            color: 'black',
                            borderRadius: '20px',
                            '&:hover': {backgroundColor: '#111B2E', color: 'white',},
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
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: "15%"}}>
                        <Weather/>
                        <img src={sphere} style={{width: 350, borderRadius: 100, marginTop: "5%"}} alt="imgPersonne"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Link to={`/task/add`}>
                                <Fab color="primary" aria-label="add">
                                    <AddIcon/>
                                </Fab>
                            </Link>
                            <Link to={`/task`} style={{marginLeft: "50px", textDecoration: "none", borderBottom: "2px solid white"}}>
                                <p style={{fontSize: "40px", margin: "20px", color: "white", fontWeight: "100"}}>({taskCount}) Tâches</p>
                            </Link>
                            <Link to={`/gift`} style={{marginLeft: "50px", textDecoration: "none"}}>
                                <p style={{fontSize: "40px", margin: "20px", color: "white", fontWeight: "100"}}>Cadeaux</p>
                            </Link>
                        </div>
                        <Grid>
                            <Tasklist taskData={taskData}/>
                        </Grid>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;
