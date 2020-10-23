import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/Decoration.svg'

function HomeHeader() {
    return (
        <div className="header">
            <div className="header-image">
            </div>
            <div className="header-cta">
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={image} />
                <div className="header-buttons">
                    <NavLink className="navlink" to='/logowanie' ><button className="btn">ODDAJ RZECZY</button></NavLink>
                    <NavLink className="navlink" to='/logowanie' ><button className="btn">ZORGANIZUJ ZBIÓRKĘ</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
