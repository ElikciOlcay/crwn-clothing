import { CartActionTypes } from './cart.types';
import { addItemToCart, decreaseCartItemQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    quantitiy: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                quantitiy: state.quantitiy + 1
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                // if cart item id is not payload cart id, return it rto the new array
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartActionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseCartItemQuantity(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer;