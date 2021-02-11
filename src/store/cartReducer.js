import products from '../data';
import { addToCart, removeFromCart, isSignedIn, ActionTypes } from './cartActions';

export const initialState = {
    products: products,
    currentUser: null,
    cart: [],
};


const cartReducer = (state = initialState, action) => {

    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return addToCart(action.payload, state)
        case ActionTypes.REMOVE_FROM_CART:
            return removeFromCart(action.payload, state);
        case ActionTypes.SIGNED_IN:
            return isSignedIn(action.payload, state);
        default:
            return state;
    }

};

export default cartReducer;