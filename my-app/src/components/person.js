import React, { Components } from 'react';

const Person = (props) =>{
    return(
        <div>
            <h1>Masz na imie{props.name} i masz {props.age}</h1>
        </div>
    );
}
export default Person;