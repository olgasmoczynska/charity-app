import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import HomeNav from './HomeNav';
import image from '../assets/Decoration.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const passwordValidation = () => {
        if (password.length >= 6) {
            setLoggedIn(true);
        }
        else {
            setError('Hasło musi mieć co najmniej 6 znaków');
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        passwordValidation();
    }
    if (loggedIn) {
        return <Redirect to='/' />
    } else return (
        <>
        <HomeNav />
        <div className="login-wrapper">
            <h1>Zaloguj się</h1>
            <img src={image} alt="decoration" />
            <div className="login-form">
                <p style={{color: "red", textAlign: "center", padding: 24}}>{error}</p>
                <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    name="email" 
                    type="email"  
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required />
                <label htmlFor="email">Hasło</label>
                    <input 
                    id="password" 
                    name="password" 
                    type="password"  
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required />
                <button className="btn-submit" type="submit">Zaloguj</button>
                </form>
            </div>
            <NavLink className="link" to='/rejestracja' >Załóż konto</NavLink>
        </div>
        </>
    )
}

export default Login;
