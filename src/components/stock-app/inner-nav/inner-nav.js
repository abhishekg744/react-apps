import React from 'react';
import './inner-nav.scss';

const InnerNav = ({ heading }) => {
    return (
        <div className="inner-nav">
            <div>{heading}</div>
            <div className="logged-in-user">user</div>
        </div>
    );
}

export default InnerNav;