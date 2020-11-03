import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import HomeNav from './HomeNav';
import image from '../assets/Decoration.svg';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);

    const passwordValidation = () => {
        if (password.length >= 6 && password === repassword) {
            setRegistered(true);
        }
        else {
            setError('Hasło musi mieć co najmniej 6 znaków i oba hasła muszą być identyczne.');
        }
    }

    const handleRegister = e => {
        e.preventDefault();
        passwordValidation();
    }
    if (registered) {
        return (
            <>
            <p>Rejestracja przebiegła pomyślnie!</p>
            <NavLink className="link" to='/logowanie' >Zaloguj się</NavLink>
            </>
        )
    } else return (
        <>
        <HomeNav />
        <div className="login-wrapper">
            <h1>Załóż konto</h1>
            <img src={image} alt="decoration" />
            <div className="login-form">
                <p style={{color: "red", padding: 24}}>{error}</p>
                <form onSubmit={handleRegister}>
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
                <label htmlFor="email">Powtórz hasło</label>
                    <input 
                    id="repassword" 
                    name="repassword" 
                    type="password"  
                    value={repassword} 
                    onChange={e => setRepassword(e.target.value)} 
                    required />
                <button className="btn-submit" type="submit">Załóż konto</button>
                </form>
            </div>
            <NavLink className="link" to='/logowanie' >Zaloguj się</NavLink>
        </div>
        </>
    )
}

export default Register;
