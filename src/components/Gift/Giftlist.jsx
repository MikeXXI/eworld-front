import React from "react"
import { Grid } from "@mui/material";
import Giftcard from "./Giftcard";

// Définition du composant fonctionnel "Giftlist"
function Giftlist({giftData}) {
    //Récupération de l'ID de l'utilisateur à partir du stockage local
    const user_id = localStorage.getItem('user_id');
    const userId = String("/api/users/"+user_id);

    // Création d'un tableau "Gifts" pour stocker les composants Giftcard qui correspondent à l'utilisateur courant
    const gifts = [];

    if (Array.isArray(giftData)) {
        giftData.forEach((gift) => { // Extraire le nombre de l'ID de l'utilisateur du cadeau
            if (gift.userId === userId) {
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
    //Stockage du nombre de cadeaux dans le stockage local
    const nbGift = gifts.length;
    localStorage.setItem('nbGift', nbGift);
    return (
        <div style={{ display: 'flex', maxHeight: 450, maxWidth: 700, overflow: 'auto', justifyContent: 'right' }}>
        <Grid container>
            {gifts}
        </Grid>
        </div>
    );
}


export default Giftlist;