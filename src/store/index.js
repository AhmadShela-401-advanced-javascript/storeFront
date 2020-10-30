import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories';
import productSlice from './products';
import productDtlSlice from './productDtl'
import cartSlice from './cart';
let reducers = combineReducers({ 
    categories: categorySlice,
    products: productSlice, 
    cart: cartSlice, 
    productDtl: productDtlSlice
});
const store = configureStore({ reducer: reducers });
export default store;