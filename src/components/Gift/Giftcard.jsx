import React from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

function Giftcard({ id, name, adress, price, description }) {

    return (
        <Grid sx={{
            position: 'center',
            width: 1500,
            height: 350,
            margin: 1,
        }}>
            <Card
                sx={{ height: 350, width: 1500 }}>
                N°{id}
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <CardMedia
                        sx={{
                            height: 150,
                            width: 125,
                            margin: 'auto',
                            position: 'center',
                        }}
                        image={adress}
                        title={adress}
                    />
                    <Typography gutterBottom variant="h6" component="div">
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {price}€
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {description}
                    </Typography>
                    <Link to={`/gift/delete/${id}`}
                        id={id}
                        >Supprimer</Link>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Giftcard;