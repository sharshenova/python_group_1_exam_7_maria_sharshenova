import React from 'react';


function OrderItem (props) {
    return(
        <div className="OrderItem">
            <button>{props.name}: {props.count} X {props.total}</button>
        </div>
    );
}

export default OrderItem;