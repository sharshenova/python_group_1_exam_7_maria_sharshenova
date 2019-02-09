import React from 'react';


function OrderItem (props) {
    return(
        <div className="OrderItem">
            <h3>{props.name}: {props.count} X {props.total} </h3>
            <button onClick={props.removeItem}>Delete</button>
        </div>
    );
}

export default OrderItem;