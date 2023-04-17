import React from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import '../../styles/style.css';

function Taskcard({ id, title, description}) {

    return (
        <Grid sx={{
            position: 'center',
            width: 1500,
            margin: 1,
        }} className="gridCard">
            <Card className="cardContent">
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className="h4">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className="decription">
                            {description}
                        </Typography>
                        <Link to={`/task/delete/${id}`}
                        id={id} className="buttonsupp"
                        >Supprimer</Link>
                    </CardContent>
                </Card>
            
        </Grid>
    );
}

export default Taskcard;