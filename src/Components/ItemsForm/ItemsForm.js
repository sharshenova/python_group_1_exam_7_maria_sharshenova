import React from 'react';
import Item from './Item/Item'

function ItemsForm (props) {
    return(
         <div className="ItemsForm">
            <h3>Add item</h3>
            {props.items.map(item => <Item label = {item.label} price = {item.price} addItem={() => {props.addItem(item.name)}} />)}
        </div>
        );
}

export default ItemsForm;