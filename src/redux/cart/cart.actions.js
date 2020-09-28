import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const cartQuantity = cartItems => ({
    type: CartActionTypes.GET_QUANTITY,
    payload: cartItems
})