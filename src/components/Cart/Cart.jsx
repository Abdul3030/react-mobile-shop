import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.scss';



const Cart = () => {

    return (
        <div className="cart-container">
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="total-price">
                    <p className="total">
                        TOTAL:
                    </p>
                    <p className="price">
                        $550.00
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



export default Cart;