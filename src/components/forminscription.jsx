// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../styles/forminscription.css'
// import logo from '../assets/logoeworld.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import { makeStyles } from '@material-ui/core/styles';

// const Inscription = () => {
//     const [nom, setNom] = useState('');
//     const [prenom, setPrenom] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const useStyles = makeStyles({
//         title: {
//             color: '#5E8CFF',
//             fontSize: 60,
//             fontWeight: 'normal'
//         },
//         inputIcon: {
//             display: 'inline-block',
//             width: 40,
//             textAlign: 'center',
//             color: 'white',
//         },
//     });

//     const classes = useStyles();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Soumission du formulaire avec les données:', { nom, prenom, email, password });
//     };

//     return (
//         <div className="divinscription">
//             <form onSubmit={handleSubmit}>
//                 <img src={logo} alt='logo e-world' className='lmj-logo' />
//                 <h1 className={classes.title}>Inscription</h1>
//                 <div className="inputlabel">
//                     <div>
//                         <label htmlFor="username" className="icon-label">
//                             <FontAwesomeIcon icon={faUser} />
//                         </label>
//                         <input className="input-with-icon" placeholder="Nom" type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="username" className="icon-label">
//                             <FontAwesomeIcon icon={faUser} className={classes.inputIcon} />
//                         </label>
//                         <input placeholder="Prénom" type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="username" className="icon-label">
//                             <FontAwesomeIcon icon={faEnvelope} className={classes.inputIcon} />
//                         </label>
//                         <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="icon-label">
//                             <FontAwesomeIcon icon={faLock} className={classes.inputIcon} />
//                         </label>
//                         <input placeholder="Mot de passe" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <button type="submit">S'inscrire</button>
//                 </div>
//             </form>
//             <Link to='/'>
//                 <button>Retour à l'accueil</button>
//             </Link>
//         </div>
//     );
// };

// export default Inscription;
