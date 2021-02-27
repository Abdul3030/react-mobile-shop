import React from 'react';
import { useHistory } from 'react-router-dom';

import './CartDetails.scss';
import { connect } from 'react-redux';
import DetailItem from './DetailItem/DetailItem';


const CartDetails = ({cart}) => {

    const location = useHistory();

    return (
        <div className="cart-details-container">
            <div className="cart-details-wrapper">
                <table className="shopping-cart-details">
                    <caption className="shopping-cart-title">shopping cart</caption>
                    <tbody className="shopping-cart-items">
                        {
                            cart.length > 0 ? cart.map((p, i) => <DetailItem key={i} item={p}  />) : <tr><td>There is no item in cart.</td></tr>
                        }
                    </tbody>
                </table>
                <div className="go-to-checkout">
                    <button onClick={()=> location.push('/checkout')}>
                        go to checkout
                    </button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
 
    return {
        cart: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDetails);