import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ShoppingSite from './components/shopping-site/shopping-site'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import StockApp from './components/stock-app/stock-app';
import MyRequest from './components/stock-app/my-requests/my-requests';

const routing = (
    <Router>
        <div className="home-bar">
            <Link to="/">Apps</Link>
        </div>
        <div className="main-route">
            <Route exact path="/" component={App} />
            <Route path="/shope" component={ShoppingSite} />
            <Route path="/stock" component={StockApp} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
