import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = ({match, onNavSelected}) => {
    //const [selectedTab, setTab] = useState('home');
    const [selectedTab, setTab] = useState(((window.location.pathname.split('/')).length > 2 ) ? 
    (window.location.pathname.split('/')[2]) : 'Home');
    console.log(selectedTab);
    
    const onTabSelected = (tab) => {
        console.log(tab);
        setTab(tab);
    }

    useEffect(() => {
        // action on update of movies
        onNavSelected(selectedTab);
    }, [selectedTab]);

    return (
        <div className="stock-nav-items">
            <Link className={selectedTab == 'home'? 'selected': ''} to="/stock/home" onClick={() =>onTabSelected('home')}>Home</Link>
            <Link className={selectedTab == 'newrequest'? 'selected': ''} to={`${match.url}/new-request`} onClick={() =>onTabSelected('newrequest')}>New Request</Link>
            <Link className={selectedTab == 'myrequest'? 'selected': ''} to={`${match.url}/my-requests`} onClick={() =>onTabSelected('myrequest')}>My Requests</Link>
        </div>
    );
}

export default Nav;