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
        <div style={{ display: 'flex', maxHeight: 450, maxWidth: 700, overflow: 'auto', justifyContent: 'right' }}>
            <Grid container>
                {tasks}
            </Grid>
        </div>
    );
}


export default Tasklist;