let initalState = {    
    cart: []
};
// reducer
export default (state = initalState, action) => {
    // update the state based on an action
    // increment, decrement, reset votes
    let {type, payload} = action;
    let cart = state.cart;
    // var selectedCategory;
    console.log('cart',cart);
    switch(type) {
        case 'ADD_TO_CART':
            // increment a specific candidate votes
            console.log('payload',payload);
            // selectedCategory = payload;
            // console.log('selectedCategory',selectedCategory);
            var isExist = false
            cart.forEach(item =>{
                if(item.product.name == payload.name){
                    if(item.product.inStok >item.quantity){
                        item.quantity++;
                        isExist = true;
                    }else{
                        isExist = true;
                        alert('No available items in the stok!!');
                    }
                }
            })
            if(!isExist){
                cart.push({product:payload,quantity:1});
            }
            // let cart = initalState.cart
            console.log('initalState.selectedCategory',cart);
            return  {cart};
            
            case 'DELETE_FROM_CART':
                cart.forEach((item,idx) =>{
                    console.log('**from store***',item.product.name);
                    console.log('** from user**',payload.product.name);
                    if(item.product.name == payload.product.name){
                        if(item.quantity > 1){
                            item.quantity--;
                        }else{
                            console.log('**inside if**');
                            cart.splice(idx,1);
                        }
                    }
                })
                console.log('cart after edit',cart);
                return  {cart};
        default:
            return state;
    }
}
// actions
export const addToCart =(item) =>{
    console.log('?????????item',item);
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const deleteFromCart =(item) =>{
    console.log('deleteFromCart',item);
    return {
        type: 'DELETE_FROM_CART',
        payload: item
    }
}