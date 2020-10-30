import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:'product',
    initialState : {
        products : [
        ]
    },
    reducers: {
        getProduct(state, action) {
            console.log("in add state!! ");
            state.products = action.payload.results || action.payload.result
        },
        putProduct(state, action) {
             state.products.forEach(product => {
                 if(product._id == action.payload){
                     product.inStock--;
                    //  return product
                 }
                });
            return state
        }
    }
});

export const { getProduct, putProduct } = productSlice.actions;

export default productSlice.reducer;
