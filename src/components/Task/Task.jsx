<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid, Container } from "@mui/material";
import Tasklist from "./Tasklist";
// import jsonFile from '../../data/task.json';
import logo from "../../assets/logoeworld.png";
import { Link } from "react-router-dom";
import "../../styles/style.css";
=======
import React, { useEffect, useState } from 'react';
import {Box, Grid, Container, Fab, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasklist from './Tasklist';
import logo from "../../assets/logoeworld.png";
import { Link } from 'react-router-dom';
import '../../styles/style.css';
>>>>>>> Stashed changes

function Task() {
  const [taskData, setTaskData] = useState([]);
  const [load, isLoad] = useState(true);

<<<<<<< Updated upstream
  //const data = jsonFile;
  //useEffect(function () {
  //    isLoad(false);
  //    setTaskData(data);
  //}, [])

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
        <img src={logo} alt="logo e-world" />
        <Link to={`/task/add`} className="bouttonadd">
          Ajouter une tâche
        </Link>
        <Link to={`/`} className="bouttonadd">
          Retour accueil
        </Link>
      </div>
      {load ? (
=======
    useEffect(function () {
       isLoad(true)
      fetch("https://eworld-api.osc-fr1.scalingo.io/api/tasks")
         .then(res => res.json())
         .then(data => {
          isLoad(false)
    setTaskData(data)
          console.log(data)
        }
        )
     }, [])

    return (
        <Container>
            <div className="divHeader">
            <img src={logo} alt='logo e-world'/>
            <Link to={`/task/add`}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
                <Link to={`/`}>
                    <Button variant="outlined" size="large" sx={{ width: 300, backgroundColor: '#5E8CFF', color: 'black', borderRadius: '20px',marginTop: '20px', '&:hover': {backgroundColor: '#111B2E', color: 'white',},}}>Retour</Button>
                </Link>
            </div>
            {load ?
>>>>>>> Stashed changes
        <Grid>
          <Box sx={{ display: "flex"}}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <Grid>
          <Tasklist taskData={taskData} />
        </Grid>
      )}
    </Container>
  );
}

export default Task;
