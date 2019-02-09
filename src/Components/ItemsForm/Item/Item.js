import React from 'react';


function Item(props) {
    return(
        <div className="Item">
            <button onClick={props.addItem}>{props.label}: ${props.price}</button>
        </div>
    );
}

export default Item;
