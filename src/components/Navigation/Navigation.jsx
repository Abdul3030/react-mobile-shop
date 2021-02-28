import React, {useState} from 'react';
import { connect } from 'react-redux';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import {HiOutlineShoppingBag, HiOutlineUserAdd, HiOutlineUserRemove, HiSearch, HiMenu, HiX} from 'react-icons/hi';

import NavItem from './NavItem/NavItem';
import SideDrawer from './SideDrawer/SideDrawer';import Cart from '../Cart/Cart';
import { Fragment } from 'react';

import './Navigation.scss';


const Navigation = ({cart, signed}) => {

    const [cartOpen, setCartOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const cartOpenHandler = () => {
        setCartOpen(prev => !prev);
    };

    const drawerOpenHandler = () => {
        setIsDrawerOpen(prev => !prev);
    };



    return(
        <Fragment >
            <SideDrawer isDrawerOpen={isDrawerOpen} clicked={drawerOpenHandler}>
                <NavItem navName="iPhone 8" />
                <NavItem navName="iPhone X" />
                <NavItem navName="iPhone 11" />
                <NavItem navName="iPhone 11pro" />
                <NavItem navName="iPhone 12" />
                <NavItem navName="iPhone 12pro" />
            </SideDrawer>
            <nav className="navigation-container">
            <div className="navigation-wrapper">
                <div  className="menu-btn">
                    {
                        !isDrawerOpen ? 
                        <HiMenu onClick={drawerOpenHandler} />:
                        <HiX onClick={drawerOpenHandler} />
                    }
                </div>
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
                            {
                                !signed ?
                                <HiOutlineUserAdd onClick={() => signInWithGoogle()} className='icon' />: 
                                <HiOutlineUserRemove onClick={() => auth.signOut()} className="icon" />
                            }
                    </div>
                        <div className="icons" >
                            <HiOutlineShoppingBag className='icon' onClick={cartOpenHandler} />
                            <span className="badge">
                                {cart.length > 0 ? cart.reduce((acc, val) => acc + val.quantity, 0) : 0}
                            </span>
                            <Cart cartOpen={cartOpen} />
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
        )
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cartItems,
        signed: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Navigation);