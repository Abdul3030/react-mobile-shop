import React from 'react';

import {ReactComponent as NotfoundLogo} from '../../assets/notfound.svg';

import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <NotfoundLogo />
        </div>
    )
};



export default NotFound;