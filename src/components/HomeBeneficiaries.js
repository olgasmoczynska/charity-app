import React, { useState } from 'react';
import HomeBeneficiariesFoundations from './HomeBeneficiariesFoundations';
import HomeBeneficiariesOrganizations from './HomeBeneficiariesOrganizations';
import HomeBeneficiariesLocal from './HomeBeneficiariesLocal';
import image from '../assets/Decoration.svg';
const API = 'http://localhost:3000';

function HomeBeneficiaries() {
    const [isFoundationsVisible, setIsFoundationsVisible] = useState(false);
    const [isOrganizationsVisible, setIsOrganizationsVisible] = useState(false);
    const [isLocalVisible, setIsLocalVisible] = useState(false);

    const displayFoundations = () => {
        setIsFoundationsVisible(true);
        setIsOrganizationsVisible(false);
        setIsLocalVisible(false);
    }

    const displayOrganizations = () => {
        setIsFoundationsVisible(false);
        setIsOrganizationsVisible(true);
        setIsLocalVisible(false);
    }

    const displayLocal = () => {
        setIsFoundationsVisible(false);
        setIsOrganizationsVisible(false);
        setIsLocalVisible(true);
    }

    return (
        <div className="beneficiaries" id="beneficiaries">
            <h1>Komu pomagamy?</h1>
            <img src={image} />
            <div className="buttons">
                <button className="btn" onClick={displayFoundations}>Fundacjom</button>
                <button className="btn" onClick={displayOrganizations}>Organizacjom pozarządowym</button>
                <button className="btn" onClick={displayLocal}>Lokalnym zbiórkom</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div style={{display: isFoundationsVisible ? 'block' : 'none' }}><HomeBeneficiariesFoundations /></div>
            <div style={{display: isOrganizationsVisible ? 'block' : 'none' }}><HomeBeneficiariesOrganizations /></div>
            <div style={{display: isLocalVisible ? 'block' : 'none' }}><HomeBeneficiariesLocal /></div>
        </div>
    )
}

export default HomeBeneficiaries;
