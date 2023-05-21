import React from "react"
import { Grid } from "@mui/material";
import Giftcard from "./Giftcard";

function Giftlist({giftData}) {
    const user_id = localStorage.getItem('user_id');
    const userIdNumber = user_id ? user_id.split('/').pop() : null; // Extraire le nombre de l'ID de l'utilisateur

    const gifts = [];

    if (Array.isArray(giftData)) {
        giftData.forEach((gift) => {
            const giftUserId = gift.userId ? gift.userId.split('/').pop() : null; // Extraire le nombre de l'ID de l'utilisateur du cadeau
            if (giftUserId === userIdNumber) {
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
            }
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