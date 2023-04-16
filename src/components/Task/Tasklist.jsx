import React from "react"
import { Grid } from "@mui/material";
import Taskcard from "./Taskcard";

function Tasklist({taskData}) {
    const tasks = [];
    taskData.forEach((task) => {
        tasks.push(
        <Taskcard key={task.id} id={task.id} title={task.title} description={task.description} />)    
    })
    return (
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {tasks}
        </Grid>
    );
}


export default Tasklist;