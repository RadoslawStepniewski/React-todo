import React, { Component } from 'react';
import Person from './components/person';
import './App.css';

class App extends Component {

  state = {
    person: [
      {name: "Radek", age: 23},
      {name: "Tomek", age: 67},
      {name: "Aga", age: 73}
    ]
  }

  switchButtonHandler = () =>{
    this.setState({
      person: [
        {name: "Radek123", age: 23},
        {name: "Tomek123", age: 67},
        {name: "Aga123", age: 73}
      ]
    });
  }

  switchChangeHandler = (e)=> {
    this.setState({
      person: [
        {name: e.target.value, age: 243},
        {name: e.target.value, age: 637},
        {name: e.target.value, age: 723}
      ]
    });
  }

  switchNameHandler = (newName)=> {
    this.setState({
      person: [
        {name: newName, age: 243242},
        {name: newName, age: 634247},
        {name: newName, age: 742423}
      ]
    });
  }

  render() {
    return (
      <div >
        <button onClick={this.switchButtonHandler}>Click</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, "Basia")} change={this.switchChangeHandler}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, "Kasia")} change={this.switchChangeHandler}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} click={this.switchNameHandler.bind(this, "Marta")} change={this.switchChangeHandler}>Children</Person>
      </div>
    );
  }
}

export default App;
