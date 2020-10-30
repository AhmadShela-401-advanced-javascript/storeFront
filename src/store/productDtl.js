import { createSlice } from '@reduxjs/toolkit';

const productDtlSlice = createSlice({
    name:'product',
    initialState : {},
    reducers: {
        selectProduct(state, action) {
            state = action.payload
        }
    }
});

export const { selectProduct } = productDtlSlice.actions;

export default productDtlSlice.reducer;
