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
        }} className="gridCard">
            <Card className="cardContent"
                sx={{ height: 350, width: 1500 }}>
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div"
                    sx={{
                        backgroundColor: "#111B2E",
                        color: "white",
                        margin: 0,
                        height: 20,
                        padding: 2,
                        borderRadius: 2,
                    }}>
                        {name}
                    </Typography>
                    <CardMedia
                        sx={{
                            height: 120,
                            width: 175,
                            margin: 'auto',
                            position: 'right',
                            backgroundColor: 'red',
                            padding: 2,
                        }}
                        image={adress}
                        title={adress}
                    />
                    <Typography gutterBottom variant="h6" component="div">
                        {price}€
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {description}
                    </Typography>
                    <Link to={`/gift/delete/${id}`}
                        id={id} className="buttonsupp"
                        >Supprimer</Link>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Giftcard;