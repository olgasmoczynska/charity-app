import React, {useState, useEffect} from 'react';
import { getBeneficiaries } from './service';
import Beneficiary from './Beneficiary';

function HomeBeneficiariesLocal () {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        getBeneficiaries()
        .then(data => setItems(data.local))
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="beneficiary-wrapper">
        {currentItems.map( ( item, index ) => { return <Beneficiary key={index}
                          name={item.name}
                          mission={item.mission}
                          requests={item.requests}
                          /> } ) }
        </div>
    )
}

export default HomeBeneficiariesLocal;
