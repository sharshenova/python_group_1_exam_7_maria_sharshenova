import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order (props) {
    const chosenItems = props.items.filter(item => item.count > 0);

    if (chosenItems.length > 0) {
        return(
            <div className="Order">
                <h3>Order Details:</h3>
                {chosenItems.map(item => 
                    <OrderItem
                        name = {item.name} 
                        count = {item.count}
                        total = {item.total}
                        label = {() => props.label(item.name)}
                        removeItem = {() => {props.removeItem(item.name)}}
                    />
                )}        
            </div>
        );
    }
    else {
        return (<p>Order is empty! Please, add some items</p>)
    }
}

export default Order;