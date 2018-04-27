import React, { Components } from 'react';
import './person.css'
const Person = (props) =>{
    return(
        <div className="Person">
            <h1 onClick={props.click}>Masz na imie {props.name} i masz {props.age}</h1>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}
export default Person;