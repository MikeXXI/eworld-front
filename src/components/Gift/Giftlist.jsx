import React from "react"
import { Grid } from "@mui/material";
import Giftcard from "./Giftcard";

function Giftlist({giftData}) {
    const gifts = [];

    if (Array.isArray(giftData)) {
        giftData.forEach((gift) => {
            gifts.push(
                <Giftcard
                    key={gift.id}
                    id={gift.id}
                    name={gift.name}
                    adress={gift.adress}
                    price={gift.price}
                    description={gift.description}
                />
            );
        });
    }
    return (
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {gifts}
        </Grid>
    );
}


export default Giftlist;