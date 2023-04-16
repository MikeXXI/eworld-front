import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Tasklist from './Tasklist';
import jsonFile from '../../data/task.json';


function Task() {
    const [taskData, setTaskData] = useState([]);
    const [load, isLoad] = useState(true);

    const data = jsonFile;
    useEffect(function () {
        isLoad(false);
        setTaskData(data);
    }, [])

    // useEffect(function () {
    //     isLoad(true)
    //     fetch(data2)
    //       .then(res => res.json())         
    //       .then(data => {
    //         isLoad(false)
    //         setTaskData(data)
    //         console.log(data)
    //       }
    //       )
    //   }, [])
   

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