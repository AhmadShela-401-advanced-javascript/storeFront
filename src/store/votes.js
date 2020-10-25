let initalState = {
    products : [
        {name: 'chooclate cake', price: 10, cat:'cake',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'10'},
        {name: 'cheese cake', price: 20, cat:'cake',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'5'},
        {name: 'premume cake', price: 30, cat:'cake',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'20'},
        {name: 'pepci', price: 40,cat:'drinks',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'3'},
        {name: 'seven', price: 50,cat:'drinks',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'2'},
        {name: 'mansaf', price: 60,cat:'food',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'0'},
        {name: 'pizza', price: 70,cat:'food',img:'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pear-walnut-blue-cheese-tart-524c4d0.jpg',inStok:'1'}
    ],
    categories: ['cake','drinks','food'],
    selectedCategory: 'cake'
};

// reducer
export default (state = initalState, action) => {
    // update the state based on an action
    // increment, decrement, reset votes
    let {type, payload} = action;
    let categories = state.categories;
    let products = state.products;
    var selectedCategory;
    console.log('Cats',categories);
    switch(type) {
        case 'SELECT_CATEGORY':
            // increment a specific candidate votes
            console.log('payload',payload);
            selectedCategory = payload;
            console.log('selectedCategory',selectedCategory);
            return { selectedCategory,categories,products};
        default:
            return state;
    }
}

// actions
export const selectCategory =(category) =>{
    console.log('?????????category',category);
    return {
        type: 'SELECT_CATEGORY',
        payload: category
    }
}