import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState : {    
        cart: []
    },
    reducers: {
        addToCart(state, action) {
            var isExist = false
            state.cart.forEach(item =>{
                if(item.product.name == action.payload.name){
                    console.log('item.product.inStock',item.product.inStock);
                    if(item.product.inStock >item.quantity){
                        item.quantity++;
                        isExist = true;
                    }else{
                        isExist = true;
                        // alert('No available items in the stok!!');
                    }
                }
            })
            if(!isExist){
                state.cart.push({product:action.payload,quantity:1});
            }
        },

        deleteFromCart(state, action) {
            state.cart.forEach((item,idx) =>{
                if(item.product.name == action.payload.product.name){
                    if(item.quantity > 1){
                        item.quantity--;
                    }else{
                        state.cart.splice(idx,1);
                    }
                }
            });
        }
    }
});


export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;