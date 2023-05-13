import React, { useEffect, useState } from 'react';
import {Box, Grid, Fab, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasklist from './Tasklist';
import Weather from '../Weather';
import logo from "../../assets/logoeworld.png";
import person from "../../assets/logosneakbyyan.png";
import { Link } from 'react-router-dom';
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

  return (
      <div>
            <div className="divHeader">
                <h1>Bienvenue,<br/> Marion</h1>
            <img src={logo} alt='logo e-world'/>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                <div>
                    <img src={person} style={{ width: '15%', borderRadius: 100}} alt="imgPersonne"/>
                    <CurrentDate />
                </div>
                <Link to={`/`}>
                    <Button variant="outlined" size="large" sx={{ backgroundColor: '#5E8CFF', color: 'black', borderRadius: '20px', '&:hover': {backgroundColor: '#111B2E', color: 'white',},}}>Deconnexion</Button>
                </Link>
                </div>
            </div>
            {load ? (
        <Grid>
          <Box sx={{ display: "flex"}}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <div style={{ display: 'flex',justifyContent: 'space-between'}}>
            <div style={{ display: 'flex', marginLeft: '20%', flexDirection: 'column'}}>
            <Weather />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to={`/task/add`}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        <Grid>
          <Tasklist taskData={taskData} />
        </Grid>
            </div>
        </div>
      )}
      </div>
  );
}

export default Task;
