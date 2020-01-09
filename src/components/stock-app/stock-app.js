import React, { useState } from 'react';
import MyRequest from './my-requests/my-requests';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Nav from './nav/nav';
import './stock-app.scss';
import NewRequest from './new-requests/new-requests';
import InnerNav from './inner-nav/inner-nav';

const StockApp = ({ match }) => {
    const [selectedTab, setTab] = useState('Home');
    const onNavSelected = (tab) => {
        setTab(selectedTab => selectedTab = tab);
    }
    
    return (
        <div className="nav-grid">
            <Nav match={match} onNavSelected={onNavSelected}/>
            <div className="inner-grid">
                <InnerNav heading={selectedTab}/>
                <div>
                <Route path={`${match.url}/new-request`} component={NewRequest} />
                <Route path={`${match.url}/my-requests`} component={MyRequest} />
                </div>
            </div>
        </div>
    );
}

export default StockApp;