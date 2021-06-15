import React from 'react';
import Button from '../button/button';
import './cart-dropdown.scss';

const CartDropdwon = () => (
    <div className="cartdropdown">
        <div className="cartitem"></div>
        <Button className="dropdown-button">Checkout</Button>
    </div>
)

export default CartDropdwon;