let initalState = {    
    categories: [],
    selectedCategory: 'cake'
};
// reducer
export default (state = initalState, action) => {
    // update the state based on an action
    // increment, decrement, reset votes
    let {type, payload} = action;
    let categories = state.categories;
    // console.log('Cats',categories);
    switch(type) {
        case 'SELECT_CATEGORY':
            // increment a specific candidate votes
            // console.log('payload',payload);
            initalState.selectedCategory=payload;
            console.log('!!!payload',payload);
            // console.log('initalState.selectedCategory',initalState.selectedCategory);
            return  {categories,selectedCategory:initalState.selectedCategory};
        case 'GET':
            categories = payload.results || payload.result
            return {categories}
        default:
            return state;
    }
}
// actions
export const selectCategory =(category) =>{
    // console.log('?????????category',category);
    return {
        type: 'SELECT_CATEGORY',
        payload: category
    }
}