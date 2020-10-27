import superagent from 'superagent';

let catApi = 'http://api-testtt.herokuapp.com/api/v1/categories';
let productsApi = 'http://api-testtt.herokuapp.com/api/v1/products';
// action creator is a function that returns an object
// return a function from my action creator
export const getRemoteData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(catApi).then(data=> {
        // call my action after getting the API response.
        console.log('====data===',data.text);
        dispatch(getAction(data.body));
    });
}

export const getRemoteProductData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(productsApi).then(data=> {
        // call my action after getting the API response.
        console.log('==//==data==//=',data.text);
        dispatch(getProductsAction(data.body));
    });
}

export const reduceStockQuantity = (body,id) => (dispatch) => {
    let api =`${productsApi}/${id}`
    // return a fucntion that will call superagent API
    body.inStock = body.inStock - 1;
    return superagent.put(api)
    .send(body)
    .then(data=> {
        // call my action after getting the API response.
        console.log('====Updated===',data.body);
        dispatch(putProductsAction(data.body));
    });
}

// acton creator function 
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

const putProductsAction = payload => {
    return {
        type: 'PUT_PRODUCTS',
        payload: payload
    }
}

const getProductsAction = payload => {
    return {
        type: 'GET_PRODUCTS',
        payload: payload
    }
}