import React from 'react';

import './styles.scss';
// import VotesCounter from './components/vote-counter'; 
// import Status from './components/status'; 
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import ProductDtl from './components/productDtl'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom'


export default propsimport => {
  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
        <Switch>
          <Route exact path="/">
            <h1>Hi this is me</h1>
          </Route>
          {/* <Route exact path="/"> */}
            {/* <Categories /> */}
            {/* <Products /> */}
          {/* </Route> */}
          {/* <Route exact path="/details">
            <ProductDtl />
          </Route>
          <Route>Oops Something went wrong!!! 404</Route> */}
        </Switch>
      {/* </BrowserRouter> */}
    </>

  )
};