import React from 'react';
import {connect} from 'react-redux';
import {DropdownActionType} from '../../redux/cart/cartaction'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import './cart-icon.scss';

const CartIcon = ({DropdownActionType})=>(
    <div className="cart-icon" onClick={DropdownActionType}>
        <ShoppingIcon className="main-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchProps = dispatch =>({
    DropdownActionType: ()=> dispatch(DropdownActionType())
})

export default connect(null,mapDispatchProps)(CartIcon);