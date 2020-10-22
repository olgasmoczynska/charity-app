import React, {useState, useEffect} from 'react';
import image from '../assets/Decoration.svg'

function HomeThreeColumns() {
    return (
        <div className="three-columns" id="three-columns">
            <div className="column">
                <p>10</p>
                <p>ODDANYCH WORKÓW</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column">
                <p>5</p>
                <p>WSPARTYCH ORGANIZACJI</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="column">
                <p>7</p>
                <p>ZORGANIZOWANYCH ZBIÓREK</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
    )
}

export default HomeThreeColumns;
