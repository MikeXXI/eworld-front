import React from "react"
import {Grid} from "@mui/material";
import Taskcard from "./Taskcard";

// Définition du composant fonctionnel "Tasklist"
function Tasklist({taskData}) {

    //Récupération de l'ID de l'utilisateur à partir du stockage local
    const user_id = localStorage.getItem('user_id'); 
    const userId = String("/api/users/"+user_id);  

    // Création d'un tableau "tasks" pour stocker les composants Taskcard qui correspondent à l'utilisateur courant
    const tasks = [];

    if (Array.isArray(taskData)) {
        taskData.forEach((task) => {
            
            if (task.userId === userId) {
                tasks.push(
                    <Taskcard
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                    />
                );
            }
        });
    }
    // Stockage du nombre de tâches dans le stockage local
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