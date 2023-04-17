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


        fetch('http://127.0.0.1:8000/api/gifts', {
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
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <h1>Ajout un cadeaux</h1>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="adress">Adresse :</label>
                    <input type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Prix :</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button type="submit">Ajouter un cadeau</button>
            </form>
        </div>
    );
};

export default Addgift;
