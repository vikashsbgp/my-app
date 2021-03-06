import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rndNumber = Math.random();
    if (rndNumber > 2) {
      throw new Error("Something went wromg.");
    }
return (
    <div className={classes.Person}>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!!</p>
        <p>{props.children}</p>
        <input onChange={props.changed} value={props.name}></input>
    </div>
);
}

export default person;