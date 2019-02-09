import React from 'react';


function OrderItem (props) {

    return(
        <div className="OrderItem">
            <h4>{props.name} x{props.count}: {props.total} KGS </h4>
            <button onClick={props.removeItem}>Delete</button>
        </div>
    );
}

export default OrderItem;