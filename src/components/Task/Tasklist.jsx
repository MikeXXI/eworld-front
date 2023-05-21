import React from "react"
import {Grid} from "@mui/material";
import Taskcard from "./Taskcard";

function Tasklist({taskData}) {

    const user_id = localStorage.getItem('user_id'); 
    const userId = String("/api/users/"+user_id);  

    const tasks = [];

    if (Array.isArray(taskData)) {
        taskData.forEach((task) => {
            
            if (task.userId === userId) {
                tasks.push(
                    <Taskcard
                        key={task.id}
                        id={task.id}
                        title={task.name}
                        description={task.description}
                    />
                );
            }
        });
    }
    const nbTask = tasks.length;
    localStorage.setItem('nbTask', nbTask);

    return (
        <div style={{display: 'flex', maxHeight: 450, maxWidth: 700, overflow: 'auto', justifyContent: 'right'}}>
            <Grid container>
                {tasks}
            </Grid>
        </div>
    );
}

export default Tasklist;