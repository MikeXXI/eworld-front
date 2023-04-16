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
            width: 300,
            height: 300,
            margin: 1,
        }}>
            <Link to={`/task/${id}`}
                id={id}                
                sx={{ textDecoration: 'none' }}>
                <Card
                    sx={{ height: 300, width: 300 }}>
                    N°{id}
                    <CardContent >
                        <Typography gutterBottom variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default Taskcard;