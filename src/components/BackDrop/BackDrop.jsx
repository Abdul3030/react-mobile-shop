import React from 'react';

import './BackDrop.scss';




const BackDrop = ({children, clicked, display}) => {

    return (
        <div className="back-drop" style={{display: `${display?'none':'block'}`}} onClick={clicked}>
            <div className="child-wrapper">
                {children}
            </div>
        </div>
    )
};


export default BackDrop;