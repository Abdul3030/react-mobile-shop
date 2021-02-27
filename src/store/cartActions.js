
//  Adding item to cart

export const addToCart = (item, state) => {
    console.log(state);
    const cartedItems = [...state.cartItems];

    const indexOfItem = cartedItems.findIndex(product=> product.id === item.id);
    
    if(indexOfItem < 0){
        cartedItems.push({...item, quantity: 1});
    }else{
        const updatedItem = { ...cartedItems[indexOfItem] };
        updatedItem.quantity++;
        cartedItems[indexOfItem] = updatedItem;
    }
    
    return {...state, cartItems: cartedItems};
};


// Removing item from card
export const removeFromCart = (itemId, state) => {
    const cartedItems = [...state.cartItems];

    const indexOfItem = cartedItems.findIndex(product=> product.id === itemId);
    const updatedItem = { ...cartedItems[indexOfItem] };
    updatedItem.quantity--;
    if(updatedItem.quantity < 1){
        cartedItems.splice(indexOfItem,1)
    }else{
        cartedItems[indexOfItem] = updatedItem;
    }

    return {...state, cartItems: cartedItems};
};

