import React from 'react';
import {AiOutlineCustomerService} from 'react-icons/ai';
import './Service.scss';



const Service = () => {


    return (
        <div className="service-container">
            <div className="service-wrapper">
                <div className="icon-wrapper">
                    <AiOutlineCustomerService/>
                </div>
                <div className="service-description">
                    <h3 className="title">SUPPORT 24/7</h3>
                    <p className="description">Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
        </div>
    )
};


export default Service;