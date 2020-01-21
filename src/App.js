import React , {useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';

function App() {

  
  return (
    <div>
      <ul>
            <li>
                <Link to="/stock">Stock</Link>
            </li>
            <li>
                <Link to="/shope">Shopping Site</Link>
            </li>
            <li>
                <Link to="/hrms">Hrms Site</Link>
            </li>
        </ul>
    </div>
    
  );
};

export default App;
