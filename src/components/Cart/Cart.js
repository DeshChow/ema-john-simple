import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price, 0)
    let shipingCost=0;
    if(total>100)
        shipingCost=100;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {total}</p>
            <p><small>Shipping Cost: {shipingCost}</small></p>
            <p>Total price: {total+shipingCost}</p>

        </div>
    );
};

export default Cart;