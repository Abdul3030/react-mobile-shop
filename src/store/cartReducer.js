
import { addToCart, removeFromCart } from './cartActions';
import { ActionTypes } from './actionTypes';

const initState = {
    cartItems: []
};

const cartReducer = (state = initState, action) => {

    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return addToCart(action.payload, state)
        case ActionTypes.REMOVE_FROM_CART:
            return removeFromCart(action.payload, state);
        default:
            return state;
    }

};

export default cartReducer;