import React from 'react';
import Item from './Item/Item'

function ItemsForm (props) {
    return(
         <div className="ItemsForm">
             {props.items.map(item => <Item label = {item.label} price = {item.price} />)}
        </div>
        );
}

export default ItemsForm;