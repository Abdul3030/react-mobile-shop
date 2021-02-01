import React, {useState} from 'react';
import { connect } from 'react-redux';
import {HiOutlineShoppingBag, HiOutlineUser, HiSearch} from 'react-icons/hi';
import NavItem from './NavItem/NavItem';
import './Navigation.scss';
import Cart from '../Cart/Cart';

const Navigation = ({cart}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const cartOpenHandler = () => {
        setCartOpen(prev => !prev)
    };
    console.log(cart);
    return(
        <nav className="navigation-container">
            <div className="navigation-wrapper">
                <div className="logo-wrapper">
                    MobileShop
                </div>
                <div className="nav-items-wrapper">
                    <NavItem navName="iPhone 8" />
                    <NavItem navName="iPhone X" />
                    <NavItem navName="iPhone 11" />
                    <NavItem navName="iPhone 11pro" />
                    <NavItem navName="iPhone 12" />
                    <NavItem navName="iPhone 12pro" />
                </div>
                <div className="nav-icons-wrapper">
                    <div className="icons">
                        <HiSearch className='icon' />
                    </div>
                    <div className="icons">
                        <HiOutlineUser className='icon' />
                    </div>
                    <div className="icons" >
                        <HiOutlineShoppingBag className='icon' onClick={cartOpenHandler} />
                        <span className="badge">
                            {cart ? cart.reduce((acc, val) => acc + val.quantity, 0) : 0}
                        </span>
                        <Cart cartOpen={cartOpen} />
                    </div>
                </div>
            </div>
        </nav>
        )
};

const mapStateToProps = state => {
    console.log(state)
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navigation);