import React, {useState, useEffect} from 'react';

function HomeHeader() {
    return (
        <div className="header">
            <div className="header-image">
            </div>
            <div className="header-cta">
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src='https://trello-attachments.s3.amazonaws.com/5f7da9a2ed1d3d01fef05458/5f7da9a2ed1d3d01fef054cd/x/ddabeef3a6e163eff5556f58b8d848d9/Decoration.svg' />
                <div className="header-buttons">
                    <button className="btn">ODDAJ RZECZY</button>
                    <button className="btn">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
