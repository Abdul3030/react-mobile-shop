import React from 'react';
import { createPortal } from 'react-dom';

import './SideDrawer.scss';




const SideDrawer = ({children, isDrawerOpen, clicked}) => {
    const content = (
        <aside onClick={clicked} className={`side-drawer ${isDrawerOpen ? 'drawer-open' : 'drawer-close'}`} >
            <div  className='side-drawer-wrapper'>
                {children}
            </div>
        </aside>
    );
    return (
        createPortal(content, document.getElementById('side-drawer'))
    )
};



export default SideDrawer;