import React, { Component } from 'react';
import Person from './components/person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Person name={"Radek"} age={23}/>
        <Person name={"Tomek"} age={75}/>
        <Person name={"Aga"} age={45}/>
      </div>
    );
  }
}

export default App;
