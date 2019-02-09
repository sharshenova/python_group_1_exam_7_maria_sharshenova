import React from 'react';


function OrderItem (props) {

    return(
        <div className="OrderItem">
        	<div className="OrderItemElement">
            	<h4>{props.label()} x{props.count}: {props.total} KGS </h4>
            </div>
            <div className="OrderItemElement">
            	<button className="btn btn-warning" onClick={props.removeItem}>Delete</button>
        	</div>
        </div>
    );
}

export default OrderItem;