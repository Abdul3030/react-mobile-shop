import React from 'react';

import './FooterOption.scss';
import SubItem from './SubItem';




const FooterOption = () => {

   
    return (
        <div className="footer-option">
            <h2>Item</h2>
            <ul className="sub-item">
                {
                    ['login','sign up', 'compare', 'cart', 'checkout']
                    .map((item, idx) => <SubItem key={idx} subItem={item} />)
                }
            </ul>
        </div>
    )
};


export default FooterOption;