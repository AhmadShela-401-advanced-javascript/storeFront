import React from 'react';

import './styles.scss';
// import VotesCounter from './components/vote-counter'; 
// import Status from './components/status'; 
import Categories from './components/categories'
import Products from './components/products'
import Header from './components/header'
// import Cart from './components/cart'

export default props => {
  return (
    <>
    <Header/>
    <Categories/>
    <Products/>
    {/* <Cart/> */}
        {/* <Status /> */}
        {/* <VotesCounter /> */}
    </>

  )
};