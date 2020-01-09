import React , {useState} from 'react';

import './shopping-site.css';
import Nav from './nav/nav';
import ItemPage from './itempage/itemPage';
import {items} from './data/static-data'

function ShoppingSite() {

  const [activeTab, setActiveTab] = useState('items');
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems( prevItems =>[...prevItems, item]);
    console.log(item);
  }

  const Content = ({ tab }) => {
    switch (tab) {
      case 'items':
        return <ItemPage pageItems={items} onAddToCart={addToCart}/>;
      case 'cart':
        return <ItemPage pageItems={cartItems} />;
    }
  }

  return (
    <div>
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <Content tab={activeTab} />
      </main>
    </div>
  );
};

export default ShoppingSite;
