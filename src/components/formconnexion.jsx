<<<<<<< Updated upstream
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../styles/formconnexion.css'
// import logo from '../assets/logoeworld.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// const LoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Email: ", email);
//         console.log("Password: ", password);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <img src={logo} alt='logo e-world' className='lmj-logo' />
//                 <h1>Connexion</h1>
//                 <label htmlFor="username" className="icon-label">
//                     <FontAwesomeIcon icon={faUser} />
//                 </label>
//                 <input
//                     type="email"
//                     placeholder={"Email"}
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="username" className="icon-label">
//                     <FontAwesomeIcon icon={faLock} />
//                 </label>
//                 <input
//                     placeholder={"Password"}
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Connexion</button>
//             </form>
//             <Link to='/'>
//                 <button>Retour à l'accueil</button>
//             </Link>
//         </div>
//     );
// };
=======
import { Link } from "react-router-dom";
import logo from '../assets/logoeworld.png'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import React from "react";

const LoginForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt='logo e-world' className='lmj-logo' />
                <Typography component="h1" variant="h2">
                    Connexion
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '20px' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Email" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '20px' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Password" variant="standard" type={showPassword ? 'text' : 'password'} endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}>
                        </TextField>
                    </Box>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button variant="outlined" size="large" sx={{ width: 300, backgroundColor: '#5E8CFF', color: 'black', borderRadius: '20px',marginTop: '20px', '&:hover': {backgroundColor: '#111B2E', color: 'white',},}}>Connexion</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" to='/'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" to='/'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Link to='/'>
                <button>Retour à l'accueil</button>
            </Link>
        </Container>
    );
};
>>>>>>> Stashed changes

// export default LoginForm;
