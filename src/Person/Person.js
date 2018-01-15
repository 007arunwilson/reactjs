import React from 'react';
import './Person.css';

const person = (props) => {

  const personParentStyle = {
    border:'1px solid #ccc',
    borderRadius:'4px',

  };

  return (
    <div style={personParentStyle} className="person" >
    <p><b>{props.name} </b>from person,with {props.age} years old
    <br/>
      <small><i>Quote : {props.children}</i></small>
    </p>
    <input onChange={props.onChange} value={props.name} type="text"/>
    <button onClick={props.deleteClick} className="delete-perosn-btn" >Delete</button>
    </div>
  )
};

export default person;
