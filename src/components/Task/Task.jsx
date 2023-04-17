import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Tasklist from './Tasklist';
// import jsonFile from '../../data/task.json';
import logo from "../../assets/logoeworld.png";
import { Link } from 'react-router-dom';
import '../../styles/style.css';



function Task() {
    const [taskData, setTaskData] = useState([]);
    const [load, isLoad] = useState(true);

     //const data = jsonFile;
     //useEffect(function () {
     //    isLoad(false);
     //    setTaskData(data);
     //}, [])

    useEffect(function () {
       isLoad(true)
      fetch("http://127.0.0.1:8000/api/tasks")
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
            <Link to={`/task/add`} className="bouttonadd">
                Ajouter une tâche
            </Link>
            </div>
            {load ?
        <Grid>
          <Box>
            En cour de chargement ...
          </Box>
        </Grid> :
        <Grid>
          <Tasklist taskData={taskData}  />
        </Grid>

      }
    </Container>
    );
}

export default Task;