import React, {useState, useEffect} from 'react';
import { getBeneficiaries } from './service';
import Beneficiary from './Beneficiary';

function HomeBeneficiariesLocal () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getBeneficiaries()
        .then(data => setItems(data.local))
    }, []);

    return (
        <div className="beneficiary-wrapper">
        {items.map( ( item, index ) => { return <Beneficiary key={index}
                          name={item.name}
                          mission={item.mission}
                          requests={item.requests}
                          /> } ) }
        </div>
    )
}

export default HomeBeneficiariesLocal;
