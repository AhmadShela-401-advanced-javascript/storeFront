import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';
import { BrowserRouter } from 'react-router-dom';
import store from './store/';

function Main() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>
    )
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main />, rootEl);




