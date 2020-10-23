import React, {useState, useEffect} from 'react';
import { getBeneficiaries } from './service';
import Pagination from "react-js-pagination";
import Beneficiary from './Beneficiary';

function HomeBeneficiariesFoundations () {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        getBeneficiaries()
        .then(data => setItems(data.foundations))
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
    
        <Pagination className="pagination"
        hideNavigation={ true }
        hideFirstLastPages={ true }
        currentPage={ currentPage }
        itemsCountPerPage={ 3 }
        totalItemsCount={ items.length }
        pageRangeDisplayed={ 3 }
        onChange={ handlePageChange }
        />
        </div>
    )
}

export default HomeBeneficiariesFoundations;
