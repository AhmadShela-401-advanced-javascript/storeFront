import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {    
        categories: [],
        selectedCategory: 'cake'
    },
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload.result || action.payload.results;
        },
        selectCategory(state, action) {
            state.selectedCategory = action.payload
            // return(state.selectedCategory)
        }
    }
});

export const { setCategories, selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
