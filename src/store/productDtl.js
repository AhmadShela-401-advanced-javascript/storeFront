import { createSlice } from '@reduxjs/toolkit';

const productDtlSlice = createSlice({
    name:'product',
    initialState:{} ,
    reducers: {
        selectProduct(state, action) {
            console.log('63521563413521354351',action.payload);
            state.product = action.payload
            console.log('63521563\\state//413521354351',state);
        }
    }
});

export const { selectProduct } = productDtlSlice.actions;

export default productDtlSlice.reducer;
