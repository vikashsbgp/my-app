import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
class App extends Component {

  state = {
    persons: [
      { id: 'abac1', name: "Vikash", age: 25 },
      { id: 'abac2', name: "Honey", age: 13 },
      { id: 'abac3', name: "Gyanu", age: 10 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }


    return(
      <div className={classes.App}>
        <Cockpit 
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        toggle={this.togglePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
