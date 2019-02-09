import React from 'react';


function Item(props) {
    return(
        <div className="Item">
            <button>{props.label}: ${props.price}</button>
        </div>
    );
}

export default Item;
