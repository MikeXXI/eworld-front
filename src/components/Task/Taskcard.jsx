import React from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

function Taskcard({ id, title, description}) {

    return (
        <Grid sx={{
            position: 'center',
            width: 1500,
            height: 200,
            margin: 1,
            backgroundColor: 'red',
        }}>
            <Card
                sx={{ height: 200, width: 1500 }}>
                N°{id}
                    <CardContent >
                        <Typography gutterBottom variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {description}
                        </Typography>
                        <Link to={`/task/delete/${id}`}
                        id={id}
                        >Supprimer</Link>
                    </CardContent>
                </Card>
            
        </Grid>
    );
}

export default Taskcard;