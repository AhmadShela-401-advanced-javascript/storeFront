// // store index.js =-> combine reducers
// // create and export my store 

// import {createStore, combineReducers} from 'redux';

// // to enable the chrome extension for redux
// import { composeWithDevTools } from 'redux-devtools-extension';
// import votes from './votes';

// // when you have more than one reducer combine here everything
// let reducers = combineReducers({votes});

// const store = () => {
//     return createStore(reducers, composeWithDevTools())
// }

// export default store();

// store index.js =-> combine reducers
// create and export my store 
import {createStore, combineReducers} from 'redux';
// to enable the chrome extension for redux
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories';
import products from './products';
import cart from './cart';
// when you have more than one reducer combine here everything
let reducers = combineReducers({categories,products,cart});
const store = () => {
    return createStore(reducers, composeWithDevTools())
}
export default store();