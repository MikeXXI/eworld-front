import React, { useEffect, useState } from 'react';
import {Box, Grid, Container, Fab, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasklist from './Tasklist';
import Weather from '../Weather';
import logo from "../../assets/logoeworld.png";
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import CircularProgress from "@mui/material/CircularProgress";

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
        <Container>
            <div className="divHeader">
            <img src={logo} alt='logo e-world'/>
            </div>
            {load ? (
        <Grid>
          <Box sx={{ display: "flex"}}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <div style={{ display: 'flex',justifyContent: 'left'}}>
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
            <Link to={`/`}>
                <Button variant="outlined" size="large" sx={{ width: 300, backgroundColor: '#5E8CFF', color: 'black', borderRadius: '20px',marginTop: '20px', '&:hover': {backgroundColor: '#111B2E', color: 'white',},}}>Retour</Button>
            </Link>
    </Container>
  );
}

export default Task;
