import React from 'react';
import './CartDetails.scss';
import { connect } from 'react-redux';
import DetailItem from './DetailItem/DetailItem';


const CartDetails = ({cart}) => {

console.log(cart);

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
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartDetails);