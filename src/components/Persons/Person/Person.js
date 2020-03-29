import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!!</p>
            <p>{this.props.children}</p>
            <input onChange={this.props.changed} value={this.props.name}></input>
        </div>
);
    }
    
}

export default Person;