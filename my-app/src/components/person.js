import React, { Components } from 'react';

const Person = (props) =>{
    return(
        <div>
            <h1 onClick={props.click}>Masz na imie {props.name} i masz {props.age}</h1>
            <h2>{props.children}</h2>
        </div>
    );
}
export default Person;