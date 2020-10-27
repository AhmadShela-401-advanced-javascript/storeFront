let initalState = {
    products : [
    ]
};
// reducer
export default (state = initalState,action) => {
    // update the state based on an action
    let products = state.products;
    let {type, payload} = action;
    // console.log('products',products);
    switch(type) {
        case 'GET_PRODUCTS':
            products = payload.results || payload.result
            // console.log('!!!payload',payload.results);
            return {products}
        case 'PUT_PRODUCTS':
            return {
                ...state,
                products: state.products.map((product) => {
                  return product;
                }),
              };
        default:
            return state;
    }
}