import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function HomeNav() {
    return (
        <nav className="nav">
            <ul className="menu">
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
                <li>Zaloguj</li>
                <li>Załóż konto</li>
            </ul>
        </nav>
    )
}

export default HomeNav;
