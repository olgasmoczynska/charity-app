import React from 'react';

function Beneficiary({name, mission, requests}) {

  return (
      <div className="beneficiary">
        <div className="beneficiary-description">
            <div className="beneficiary-name">{name}</div>
            <div className="beneficiary-mission">{mission}</div>
        </div>
        <div className="beneficiary-requests">{requests}</div>
      </div>
  );
}

export default Beneficiary;
