// Types of Actions
//

export const ActionTypes = {
    ADD_TO_CART:'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};
//  Adding item to cart
export const addToCart = (item, state) => {
    const cartedItems = [...state.cart];

    const indexOfItem = cartedItems.findIndex(product=> product.id === item.id);
    
    if(indexOfItem < 0){
        cartedItems.push({...item, quantity: 1});
    }else{
        const updatedItem = { ...cartedItems[indexOfItem] };
        updatedItem.quantity++;
        cartedItems[indexOfItem] = updatedItem;
    }

    return {...state, cart: cartedItems};
};


// Removing item from card
export const removeFromCart = (itemId, state) => {
    const cartedItems = [...state.cart];

    const indexOfItem = cartedItems.findIndex(product=> product.id === itemId);
    const updatedItem = { ...cartedItems[indexOfItem] };
    updatedItem.quantity--;
    if(updatedItem.quantity < 1){
        cartedItems.splice(indexOfItem,1)
    }else{
        cartedItems[indexOfItem] = updatedItem;
    }

    return {...state, cart: cartedItems};
}