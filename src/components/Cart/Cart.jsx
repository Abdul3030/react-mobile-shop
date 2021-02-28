import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {MdRemoveShoppingCart} from 'react-icons/md';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import './Cart.scss';



const Cart = ({cartOpen, cart}) => {
    const location = useHistory();
    console.log(cart);
    return (
        <div className="cart-container" style={{display: `${cartOpen?'block':'none'}`}}>
            <div className="cart-wrapper">
                <div className="cart-items-wrapper">
                    {
                        cart.length > 0 ? cart.map(item => <CartItem key={item.id} item={item} />): <MdRemoveShoppingCart />
                    }
                </div>
                <div className="total-price">
                    <p className="total">
                        TOTAL:
                    </p>
                    <p className="price">
                        ${cart.length > 0 ? cart.reduce((acc, val) => acc + (val.quantity * val.price), 0):0}
                    </p>
                </div>
                <div className="proceed-button">
                    <button onClick={()=> location.push('/checkout')}>
                        Proceed to Checkout
                    </button>
                </div>
                <div className="view-cart">
                    <Link to={cart.length > 0 ? '/cart' : null} >
                        View Cart
                    </Link>
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

export default connect(mapStateToProps)(Cart);