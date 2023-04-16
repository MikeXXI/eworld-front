import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Tasklist from './Tasklist';


function Task() {
    const [taskData, setTaskData] = useState([]);
    const [load, isLoad] = useState(true);

    useEffect(function () {
        isLoad(true)
        fetch("http://127.0.0.1:8000/api/tasks")
          .then(res => res.json())
          .then(data => {
            isLoad(false)
            setTaskData(data)
          }
          )
      }, [])
   

    return (
        <Container>
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