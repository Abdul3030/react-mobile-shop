import products from '../data';
import { addToCart, removeFromCart, ActionTypes } from './cartActions';

export const initialState = {
    products: products,
    cart: [],
    users: 'Jahid, Rafi, Solaiman'
};


const cartReducer = (state = initialState, action) => {

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