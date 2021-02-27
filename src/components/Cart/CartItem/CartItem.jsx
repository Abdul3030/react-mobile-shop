import React from 'react';
import {connect} from 'react-redux';
import { ActionTypes } from '../../../store/actionTypes';
import './CartItem.scss';
import {RiDeleteBin6Line} from 'react-icons/ri';

const CartItem = ({item, removeFromCart}) => {
    const {imgUrl, title, quantity, price} = item;
    return (
        <div className="cart-item">
            <div className="image-wrapper">
                <img src={imgUrl} alt="Product" className="product-image"/>
            </div>
            <div className="details-wrapper">
                <p className="product-title">
                    {title}
                </p>
                <div className="price-wrapper">
                    <span className="quantity"> {quantity} </span>
                        X
                    <span className="price"> ${price}</span>
                </div>
            </div>
            <div className="delete-btn">
                <RiDeleteBin6Line onClick={()=> removeFromCart(item.id)} />
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: itemId => dispatch({type: ActionTypes.REMOVE_FROM_CART, payload: itemId})
    }
}

export default connect(null, mapDispatchToProps)(CartItem);