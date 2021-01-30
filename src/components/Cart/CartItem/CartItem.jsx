import React from 'react';
import './CartItem.scss';
import {RiDeleteBin6Line} from 'react-icons/ri';
import image from '../../../assets/image/slide1.jpg';

const CartItem = () => {

    return (
        <div className="cart-item">
            <div className="image-wrapper">
                <img src={image} alt="Product" className="product-image"/>
            </div>
            <div className="details-wrapper">
                <p className="product-title">
                    Proactive Case For Apple
                </p>
                <div className="price-wrapper">
                    <span className="quantity">5</span>
                    X
                    <span className="price">125</span>
                </div>
            </div>
            <div className="delete-btn">
                <RiDeleteBin6Line />
            </div>
        </div>
    )
};

export default CartItem;