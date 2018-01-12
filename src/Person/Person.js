import React from 'react';

const person = (props) => {
  return (
    <div onClick={props.click} >
    <p><b>{props.name} </b>from person,with {props.age} years old
    <br/>
      <small><i>Quote : {props.children}</i></small>
    </p>
    <input onChange={props.onchangefn} type="text"/>
    </div>
  )
};

export default person;
