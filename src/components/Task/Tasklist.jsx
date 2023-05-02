import React from "react"
import { Grid} from "@mui/material";
import Taskcard from "./Taskcard";

function Tasklist({taskData}) {
    const tasks = [];
    taskData.forEach((task) => {
        tasks.push(
        <Taskcard key={task.id} id={task.id} title={task.title} description={task.description} />)    
    })
    return (
        <div style={{ maxHeight: 400, maxWidth: 600, overflow: 'auto' }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {tasks}
            </Grid>
        </div>
    );
}


export default Tasklist;