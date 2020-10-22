import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

function HomeFourSteps() {
    return (
        <div className="instructions" id="instructions">
            <div className="instructions-header">
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={image} />
            </div>
            <div className="four-steps">
                <div className="step">
                    <img src= {icon1}></img>
                    <p>Wybierz rzeczy</p>
                    <hr></hr>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <img src= {icon2}></img>
                    <p>Spakuj je</p>
                    <hr></hr>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="step">
                    <img src= {icon3}></img>
                    <p>Zdecyduj, komu chcesz pomóc</p>
                    <hr></hr>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <img src= {icon4}></img>
                    <p>Zamów kuriera</p>
                    <hr></hr>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="instructions-button">
                <NavLink to='/logowanie' ><button className="btn">ODDAJ RZECZY</button></NavLink>
            </div>
        </div>
    )
}

export default HomeFourSteps;
