import React from "react"
import { Grid} from "@mui/material";
import Taskcard from "./Taskcard";

function Tasklist({taskData}) {
    // const user_id = localStorage.getItem('user_id');
    const user_id = "/api/users/1";
    const tasks = [];
    taskData.forEach((task) => {
        if (task.userId === user_id){
            tasks.push(<Taskcard key={task.id} id={task.id} title={task.title} description={task.description} />)
        }
            
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