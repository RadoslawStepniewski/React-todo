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
  render() {
    return (
      <div >
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
