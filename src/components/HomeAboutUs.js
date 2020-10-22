import React, {useState, useEffect} from 'react';
import image from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';

function HomeAboutUs() {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <h1>O nas</h1>
                <img src={image} />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} />
            </div>
            <div className="about-picture"></div>
        </div>
    )
}

export default HomeAboutUs;
