import React from 'react';

import './Slide.scss';



const Slide = ({imgSource}) => {


    return (
        <div className="slide-container">
            <div className="image-wrapper">
                <img src={imgSource} alt="container" className="slide-image"/>
            </div>
            <div className="content-container">
                <div className="content-wrapper">
                    <h3 className="pri-title">Ready to</h3>
                    <h1 className="title">Title is the one who can decide?</h1>
                    <p className="sub-title">30 skins powerful features.</p>
                    <button className="shop-now">Shop Now</button>
                </div>
            </div>
        </div>
    )
};




export default Slide;