import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Addgift = ({ onCloseModal, onAddGift }) => {
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const user_id = "/api/users/1"
    const handleAddGift = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            adress: adress,
            price: parseInt(price),
            description: description,
            userId: user_id
        }
        const jsonData = JSON.stringify(data);
        fetch('https://eworld-api.osc-fr1.scalingo.io/api/gifts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))
            .then(jsonData => {
                toast.success('Cadeau crée avec succès');
                onAddGift(); // Appeler la fonction onAddTask pour mettre à jour la liste des tâches
                onCloseModal(); // Fermer la modal
            })
            .catch(error => console.error(error));
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <form onSubmit={handleAddGift} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{ color: "#111B2E", fontWeight: 500, fontSize: "2rem", marginTop: "2rem", marginBottom: "2rem"}}>Ajout un cadeaux</h1>
                <div>
                    <input placeholder={"Nom"} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Adresse"}  type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Prix"}  type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Description"}  type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <button type="submit" style={{ backgroundColor: '#111B2E', color: "white", border: "none", borderRadius: '20px', padding: "15px", cursor: "pointer" }}>Ajouter un cadeau</button>
            </form>
        </div>
    );
};
export default Addgift;
