import React from 'react';
import { Link } from 'react-router-dom';





const SubItem = ({subItem}) => {
    return (
        <li>
             <Link to='#'>
                {subItem}
            </Link>
        </li>
    )
};


export default SubItem;