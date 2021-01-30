import React from 'react';
import image from '../../assets/image/Headshot2.png';
import './Promo.scss';



const Promo = () => {


    return (
        <div className="promo-container">
            <div className="promo-wrapper">
                <div className="image-wrapper">
                    <img src={image} alt="Promo" className="promo-image"/>
                </div>
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
    )
};


export default Promo;