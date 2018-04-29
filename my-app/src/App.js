import React, { Component } from 'react';
import Person from './components/person';
import './App.css';

class App extends Component {

  state = {
    person: [
      {name: "Radek", age: 23},
      {name: "Tomek", age: 67},
      {name: "Aga", age: 73}
    ],
    showPerson : false
  }

  deletePersonHandler = (i)=>{
   const person = [...this.state.person];
   person.splice(i, 1);
   this.setState({person: person})

  }


  switchButtonHandler = () =>{
    const show = this.state.showPerson;
    this.setState({
      showPerson : !show
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

    const style = {
      color: "blue",
      fontSize: "2em",
      border: "1px red solid"
    }

    let persons = null;

    if (this.state.showPerson){
      persons = (
       <div>
         {this.state.person.map((e, i) =>{
           return <Person 
           key={i}
           name={e.name} 
           age={e.age}
           click={()=>this.deletePersonHandler(i)}/>
        
         })}
       
      </div>
      )
    }
     
    return (
      <div style={style}>
        <button onClick={this.switchButtonHandler}>Click</button>
        {persons }
    
      </div>
    );
  }
}

export default App;
