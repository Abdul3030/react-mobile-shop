import React from 'react';
import {Link} from 'react-router-dom';
import './NavItem.scss';




const NavItem = ({navName}) => {


    return (
        <div className="nav-item">
            <Link to='/'>
                {navName}
            </Link>
        </div>
    )
};


export default NavItem;