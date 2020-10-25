import React from 'react';

import './styles.scss';
// import VotesCounter from './components/vote-counter'; 
import Status from './components/status'; 
import Header from './components/header'

export default props => {
  return (
    <>
    <Header/>
        <Status />
        {/* <VotesCounter /> */}
    </>

  )
};