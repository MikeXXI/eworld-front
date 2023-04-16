import * as React from 'react';
import { useState } from 'react';
import '../styles/forminscription.css';
import logo from '../assets/logoeworld.png';
import { Grid } from '@mui/material';


const Inscription = () => {
    const [nom, setNom] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Soumission du formulaire avec les données:', { nom, prenom, email, password });
    };

return (<>
  <Grid container direction="column" justifyContent="center" alignItems="center" className='container'>
    <img src={logo} alt='logo e-world' className='lmj-logo' />
    <h1>Inscription</h1>
    <FormControl defaultValue="" required onSubmit={handleSubmit}>
      <Label htmlFor="nom">Nom</Label>
      <Input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <Label htmlFor="pseudo">Pseudo</Label>
      <Input type="text" id="pseudo" value={pseudo} onChange={(e) => setPrenom(e.target.value)} />
      <Label htmlFor="prenom">Prénom</Label>
      <Input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </FormControl>
  </Grid>
</>
);
};

export default Inscription;
