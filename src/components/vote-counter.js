import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../store/votes.js';

// read state from the store : through props -> mapStateToProps
// + do actions to update the store values => mapDispatchToProps

const VotesCounter = props => {
    console.log("props.counter : ",props.counter)
    return (
        <section className="counter"> 
            <ul>
                {props.counter.candidates.map((person,idx)=>{
                    return <li onClick={()=> props.increment(person.name) } key={idx}>{person.name} : {person.votes}</li>
                })}
            </ul>
            <button onClick={props.reset}>reset all</button>
        </section>
    )
};

const mapStateToProps = state => ({
    counter: state.votes
});

const mapDispatchToProps = {increment, decrement, reset};
/*
const mapDispatchToProps = ({
    increment: () => disptach(increment()),
    decrement: ()=> disptach(decrement()),
    reset: ()=> disptach(reset())
});
*/

// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);