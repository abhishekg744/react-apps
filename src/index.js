import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/hrms/store';

function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}

const ShoppingSite = Loadable({
    loader: () => import('./components/shopping-site/shopping-site'),
    loading: Loading
});

const StockApp = Loadable({
    loader: () => import('./components/stock-app/stock-app'),
    loading: Loading
});

const HrmsApp = Loadable({
    loader: () => import('./components/hrms'),
    loading: Loading
});

const routing = (
    <Router>
        <div className="home-bar">
            <Link to="/">Apps</Link>
        </div>
        <div className="main-route">
            <Route exact path="/" component={App} />
            <Route path="/shope" component={ShoppingSite} />
            <Route path="/stock" component={StockApp} />
            <Provider store={store}>
                <Route path="/hrms" component={HrmsApp} />
            </Provider>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
