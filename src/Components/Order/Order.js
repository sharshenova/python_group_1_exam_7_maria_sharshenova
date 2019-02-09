import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order (props) {


    return(
         <div className="Order">
             {props.items.map(item => <OrderItem name = {item.name} count = {item.count} total = {item.total} />)}
        </div>
        );
}

export default Order;