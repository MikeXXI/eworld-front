import React, { useState } from 'react';
import { useNavigate} from "react-router";
import logo from '../../assets/logoeworld.png'


const Addgift = () => {
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const user_id = "/api/users/1"
    const handleSubmit = (event) => {
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
            .catch(error => console.error(error));
            navigate('/gift');
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={logo} alt='logo e-world' style={{width: "30%"}} />
                <h1 style={{ color: "#5E8CFF", fontWeight: 500, fontSize: "4rem", marginTop: "2rem", marginBottom: "2rem"}}>Ajout un cadeaux</h1>
                <div>
                    <input placeholder={"Nom"} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Adresse"}  type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} style={{ width: "100%", padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Prix"}  type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: "100%", padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>
                <div>
                    <input placeholder={"Description"}  type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", padding: "15px", borderRadius: "20px", border: "none", marginBottom: "20px"}}/>
                </div>

                <button type="submit" style={{ backgroundColor: '#5E8CFF', border: "none", borderRadius: '20px', padding: "15px", '&:hover': {backgroundColor: '#111B2E', color: '#5E8CFF', border: "solid 3px #5E8CFF",},}}>Ajouter un cadeau</button>
            </form>
        </div>
    );
};
export default Addgift;
