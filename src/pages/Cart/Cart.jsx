import React from 'react';
import './Cart.css'
import CartItem from '../CartItem';

function Cart(props) {
    return (
        <div className='cart'>
            <CartItem />
        </div>
    );
}

export default Cart;