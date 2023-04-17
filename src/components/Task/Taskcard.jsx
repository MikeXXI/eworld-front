import React from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import '../../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Taskcard({ id, title, description}) {

    return (
        <Grid sx={{
            position: 'center',
            width: 1500,
            margin: 1,
        }} className="gridCard">
            <Card className="cardContent">
                    <CardContent>
                        <div className="titleSup">
                        <Typography style={{ margin: 0 }} gutterBottom variant="h4" component="div" className="h4">
                            <FontAwesomeIcon icon={faUser} />
                            {title}
                        </Typography>
                        <Link to={`/task/delete/${id}`} id={id} className="buttonsupp">Supprimer</Link>
                        </div>
                        <Typography gutterBottom variant="h6" component="div" className="decription">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            
        </Grid>
    );
}

export default Taskcard;