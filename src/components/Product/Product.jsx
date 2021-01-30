import React from 'react';
import image from '../../assets/image/Headshot2.png';
import {AiOutlineShopping} from 'react-icons/ai'
import './Product.scss';





const Product = ({title}) => {
    
    return (
        <div className="product-container">
            <div className="product-wrapper">
                <div className="image-wrapper">
                    <img src={image} alt="" className="product-image"/>
                    <div className="icons-wrapper">

                    </div>
                </div>
                <div className="description-container">
                    <div className="description-wrapper">
                        <div className="row-subtitle">
                            <h5 className="brand-name">
                                lifeproof
                            </h5>
                            <h5 className="rating">
                                *****
                            </h5>
                        </div>
                        <div className="row-title">
                            <p className="product-title">
                            LifeProof - Case for Apple® iPhone® XR - Asphalt {title}
                            </p>
                        </div>
                        <div className="row-price">
                            <h4 className="price">
                                $550
                            </h4>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <button className="add-to-cart">
                           <AiOutlineShopping className="btn-icon"/> add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};




export default Product;