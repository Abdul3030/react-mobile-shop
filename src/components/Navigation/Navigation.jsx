import React from 'react';
import {HiOutlineShoppingBag, HiOutlineUser, HiSearch} from 'react-icons/hi';
import NavItem from './NavItem/NavItem';
import './Navigation.scss';
import Cart from '../Cart/Cart';

const Navigation = () => {

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
                    <div className="icon">
                        <HiSearch />
                    </div>
                    <div className="icon">
                        <HiOutlineUser />
                    </div>
                    <div className="icon">
                        <HiOutlineShoppingBag />
                        <span className="badge">
                            50
                        </span>
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>
        )
};


export default Navigation;