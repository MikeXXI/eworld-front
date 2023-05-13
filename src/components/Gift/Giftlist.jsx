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
        <div style={{ display: 'flex', maxHeight: 400, maxWidth: 600, overflow: 'auto', justifyContent: 'right' }}>
        <Grid container>
            {gifts}
        </Grid>
        </div>
    );
}


export default Giftlist;