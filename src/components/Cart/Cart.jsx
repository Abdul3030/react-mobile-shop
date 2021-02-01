import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import './Cart.scss';



const Cart = ({cartOpen, cart}) => {

    
    return (
        <div className="cart-container" style={{display: `${cartOpen?'block':'none'}`}}>
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    {
                        cart?cart.map(item => <CartItem key={item.id} item={item} />): <p>The cart is empty</p>
                    }
                </div>
                <div className="total-price">
                    <p className="total">
                        TOTAL:
                    </p>
                    <p className="price">
                        ${cart.reduce((acc, val) => acc + (val.quantity * val.price), 0)}
                    </p>
                </div>
                <div className="proceed-button">
                    <button>
                        Proceed to Checkout
                    </button>
                </div>
                <div className="view-cart">
                    View Cart
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);