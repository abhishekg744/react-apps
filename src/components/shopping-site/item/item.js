import React from 'react';
import './item.scss';

const Item = ({ item, onAddToCart }) => {

    return (
        <div className="item-container">
            <div className="item-1">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="item-2">
                <i className="price">{item.price}</i>
                <button className="cart-btn" onClick={onAddToCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default Item;