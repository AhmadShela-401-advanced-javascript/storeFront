import superagent from 'superagent';

let catApi = 'http://api-testtt.herokuapp.com/api/v1/categories';
let productsApi = 'http://api-testtt.herokuapp.com/api/v1/products';
// action creator is a function that returns an object
// return a function from my action creator
export const getRemoteData = () => {
    // return a fucntion that will call superagent API
     return superagent.get(catApi).then(data=> {
        // call my action after getting the API response.
        console.log('====data===',data.text);
        return data.body;
        // dispatch(getAction(data.body));
    });
}

export const getRemoteProductData = () => {
    // return a fucntion that will call superagent API
    console.log('==//==data==//=');
    return superagent.get(productsApi).then(data=> {
        // call my action after getting the API response.
        return data.body;
        // dispatch(getProductsAction(data.body));
    });
}

export const reduceStockQuantity = (body) => (dispatch) => {
    let api =`${productsApi}/${body._id}`
    // return a fucntion that will call superagent API
    body.inStock = body.inStock - 1;
    return superagent.put(api)
    .send(body)
    .then(data=> {
        // call my action after getting the API response.
        console.log('====Updated===',data.body);
        return body;
        // dispatch(putProductsAction(data.body));
    });
}