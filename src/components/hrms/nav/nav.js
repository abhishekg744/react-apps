import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { NavSettings } from './nav-settings';

const Nav = ({ match, onNavSelected }) => {
    //const [selectedTab, setTab] = useState('home');
    const [selectedTab, setTab] = useState(((window.location.pathname.split('/')).length > 2) ?
        (window.location.pathname.split('/')[2]) : 'Dashboard');
    console.log(selectedTab);

    const onTabSelected = (tab) => {
        console.log(tab);
        setTab(tab);
    }

    useEffect(() => {
        onNavSelected(selectedTab);
    }, [selectedTab]);

    return (
        <div className="stock-nav-items">
            {NavSettings.map((navItem, index )=>
                <Link key={index} className={selectedTab == navItem.name ? 'selected' : ''} to={navItem.path} onClick={() => onTabSelected(navItem.name)}>{navItem.name}</Link>
            )}
        </div>
    );
}

export default Nav;