import React from 'react';  
import './Promo.scss';



const Promo = ({imgUrl}) => {


    return (
        <div className="promo-container" >
            <div className="promo-wrapper">
                <div className="image-wrapper">
                    <img src={imgUrl} alt="Promo" className="promo-image"/>
                </div>
                <div className="promo-details-container">
                    <div className="promo-details-wrapper">
                        <h3 className="sub-title">
                            New Collection
                        </h3>
                        <h1 className="title">
                            New Arrivals
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default Promo;