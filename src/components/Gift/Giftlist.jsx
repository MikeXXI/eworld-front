import React from "react"
import { Grid } from "@mui/material";
import Giftcard from "./Giftcard";

function Giftlist({giftData}) {
    // const user_id = localStorage.getItem('user_id');
    const user_id = "/api/users/1";
    const gifts = [];

    if (Array.isArray(giftData)) {
        giftData.forEach((gift) => {
            if (gift.userId === user_id){
            gifts.push(                
                <Giftcard
                    key={gift.id}
                    id={gift.id}
                    name={gift.name}
                    adress={gift.adress}
                    price={gift.price}
                    description={gift.description}
                />
            );}
        });
    }
    return (
        <div style={{ display: 'flex', maxHeight: 450, maxWidth: 700, overflow: 'auto', justifyContent: 'right' }}>
        <Grid container>
            {gifts}
        </Grid>
        </div>
    );
}


export default Giftlist;