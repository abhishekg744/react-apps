import React, { useState } from 'react';
import Nav from './nav/nav';
import InnerNav from './inner-nav/inner-nav';
import { Route } from 'react-router-dom';
import './index.scss'
import Dashboard from './dashboard/dashboard';
import Department from './department/department';
import Office from './office/office';
import store from './store';
import { Provider, connect, useSelector } from 'react-redux';

const mapStateToProps = state => {
    return { loading: state.loading };
}

const Hrms = ({ match }) => {

    const [selectedTab, setTab] = useState('Dashboard');
    const loading = useSelector(state => state.loading);
    const onNavSelected = (tab) => {
        setTab(selectedTab => selectedTab = tab);
    }
    console.log('loading', loading);
    return (
        <div className="hrms-grid">
            <Nav onNavSelected={onNavSelected} />
            <div className="inner-grid">
                <InnerNav heading={selectedTab} />
                <div className="nav-content">
                    <div>
                        <Route path={`${match.url}/dashboard`} component={Dashboard} />
                        <Route path={`${match.url}/department`} component={Department} />
                        <Route path={`${match.url}/office`} component={Office} />
                    </div> {loading ? <div>loading..............</div>:<></>}
                </div>
            </div>
        </div>
    );
}

export default Hrms;