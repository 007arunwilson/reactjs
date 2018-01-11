import React from 'react';

const person = (props) => {
  return (
    <div>
    <p><b>{props.name} </b>from person,with {props.age} years old
    <br/>
      <small><i>Quote : {props.children}</i></small>
    </p>

    </div>
  )
};

export default person;
