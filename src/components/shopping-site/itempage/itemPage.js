import React from 'react';
import ProtoTypes from 'prop-types'
import Item from '../item/item'

const ItemPage = ({ pageItems, onAddToCart }) => {

    return (
        <div>
            {pageItems.map(item =>
                <Item key={item.id} item={item} onAddToCart={() => onAddToCart(item)}/>
            )}
        </div>
    )
};

ItemPage.propType = {
    pageItems: ProtoTypes.array.isRequired
}


export default ItemPage;