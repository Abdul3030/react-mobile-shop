import React from 'react';

import './CheckItem.scss';



const CheckItem = ({item}) => {

    const {imgUrl, title, brand, price, quantity} = item;

    return (
        <li className='checkout-item'>
            <div className="image-wrapper">
                <img src={imgUrl} alt="Product"/>
                <span className="quantity-badge">{quantity}</span>
            </div>
            <div className="checkout-title-wrapper">
                <p className='checkout-item-title'>{title}</p>
                <div className="checkout-subtitle">{brand}</div>
            </div>
            <div className="checkout-subtotal">
                ${price*quantity}
            </div>
        </li>
    )
};


export default CheckItem;