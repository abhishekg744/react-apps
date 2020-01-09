import React from 'react';
import './nav.scss';

const Nav = ({ activeTab, onTabChange }) => {

    const itemClass = type => activeTab == type ? 'selected' : '';
    

    return (
        <div className="nav">
            <ul className="nav-items">
                <li className={'nav-item ' + itemClass('items')} onClick={() => onTabChange('items')}> Items</li>
                <li className={'nav-item ' + itemClass('cart')} onClick={() => onTabChange('cart')}>Cart</li>
            </ul>
        </div>
    )
}

export default Nav;
