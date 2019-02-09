import React from 'react';

function TotalPrice (props) {

    return (
        <div className="TotalPrice">
            <h3>Total Price: {props.totalPrice}</h3>
        </div>
    )
}

export default TotalPrice;