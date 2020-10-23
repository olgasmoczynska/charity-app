import React, {useState, useEffect} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NavLink } from 'react-router-dom';

function HomeNav() {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><NavLink className="link" to='/logowanie' >Zaloguj</NavLink></li>
                <li><NavLink className="link" to='/rejestracja' >Załóż konto</NavLink></li>
            </ul>
            <ul className="menu">
                <li>Start</li>
                <li>
                    <Link
                    to="instructions"
                    smooth={true}
                    activeClass="active">
                    O co chodzi?
                    </Link>
                </li>
                <li><Link
                    to="about"
                    smooth={true}
                    activeClass="active">
                    O nas
                    </Link>
                </li>
                <li>
                    <Link
                    to="beneficiaries"
                    smooth={true}
                    activeClass="active">
                    Fundacje i organizacje
                    </Link>
                </li>
                <li>
                    <Link
                    to="contact"
                    smooth={true}
                    activeClass="active">
                    Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNav;
