import React from 'react';
import { connect } from 'react-redux';
import CheckItem from './CheckItem/CheckItem';

import './CheckOut.scss';




const CheckOut = ({cart, subtotal}) => {

    const shipping = subtotal*0.3;
    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <h1 className="checkout-title">Check Out</h1>
                <ul className="checkout-items">
                    {
                        cart.length > 0 ? 
                        cart.map((item, idx) => <CheckItem item={item}  />):
                        <li>There is no item in the cart</li>
                    }
                </ul>
                <div className="subtotal-wrapper">
                    <div className="subtotal">
                        <h3>Subtotal</h3>
                        <h3>{subtotal}</h3>
                    </div>
                    <div className="shipping">
                        <h3>Shipping</h3>
                        <h3>{shipping}</h3>
                    </div>
                </div>
                <div className="total-wrapper">
                    <h2>Total</h2>
                    <h2><span className='usd'>usd </span>$ {subtotal + shipping}</h2>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {

    return {
        cart: state.cart,
        subtotal: state.cart.reduce((acc, val) => acc + (val.price * val.quantity),0),
    }
};

export default connect(mapStateToProps)(CheckOut);