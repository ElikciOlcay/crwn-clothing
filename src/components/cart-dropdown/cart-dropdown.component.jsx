import React from 'react';
import CustomButton from '../custom-button/custom-buttom.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

import { withRouter } from 'react-router-dom'; 

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
                )
                :
                (
                <span className="empty-message">You cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// withRouter erlaubt die history props
export default withRouter(connect(mapStateToProps)(CartDropdown));