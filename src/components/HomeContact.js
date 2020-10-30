import React, { useState } from 'react';
import image from '../assets/Decoration.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
const API = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

function HomeContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const tmpErrors = [];
        if (name === '' || name.includes(' ')) {
          tmpErrors.push('Provide your name as a single word');
        }
        if (message.length < 120) {
          tmpErrors.push('Message must have at least 120 characters');
        }
        if (tmpErrors.length > 0) {
          setErrors(tmpErrors);
          return;
        }

        fetch(API, {
            method: "POST",
            body: JSON.stringify({
              name,
              email,
              message
            }),
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok === false) {
              throw new Error("Błąd sieci!");
            } else {
              return response.json();
            }
        })
        .then(data => {
            console.log(data);
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch(err => {
            setSuccess(false);
            console.log(err);
        });
    }

    return (
        <>
        <div className="contact" id="contact">
        <div className="overlay">
            <div className="contact-form">
                <h1>Skontaktuj się z nami</h1>
                <img src={image} alt="decoration" />
                {success ? <div style={{color: "green"}}><p>Wiadomość została wysłana!</p><p>Wkrótce się skontaktujemy.</p></div> : errors.map((err, i) => <p style={{color: "red", padding: 5}} key={i}>{err}</p>)}
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input 
                    id="name" 
                    type="text" 
                    placeholder="Krzysztof" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    required />
                    <label htmlFor="email">Wpisz swój email</label>
                    <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="abc@xyz.pl" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required />
                    <label htmlFor="paragraph">Wpisz swoją wiadomość</label>
                    <textarea 
                    name="paragraph" 
                    rows="5" 
                    cols="40" 
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} />
                    <button className="btn-submit">Wyślij</button>
                </form>
            </div>
        </div>
        <footer className="footer">
            <div></div>
            <p>Copyright by Coders Lab</p>
            <div className="footer-icons">
                <a href='http://www.facebook.com' target='_blank'><img src={facebook} alt="Facebook icon" /></a>
                <a href='http://www.instagram.com' target='_blank'><img src={instagram} alt="Instagram icon" /></a>
            </div>
        </footer>
        </div>
        </>
    )
}

export default HomeContact;
