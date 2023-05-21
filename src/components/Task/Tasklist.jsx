import React from "react"
import {Grid} from "@mui/material";
import Taskcard from "./Taskcard";

function Tasklist({taskData}) {

    const user_id = localStorage.getItem('user_id');
    const userIdNumber = user_id ? user_id.split('/').pop() : null; // Extraire le nombre de l'ID de l'utilisateur

    const tasks = [];

    if (Array.isArray(taskData)) {
        taskData.forEach((task) => {
            const taskUserId = task.userId ? task.userId.split('/').pop() : null; // Extraire le nombre de l'ID de l'utilisateur de la tâche
            if (taskUserId === userIdNumber) {
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

    return (
        <div style={{display: 'flex', maxHeight: 450, maxWidth: 700, overflow: 'auto', justifyContent: 'right'}}>
            <Grid container>
                {tasks}
            </Grid>
        </div>
    );
}

export default Tasklist;