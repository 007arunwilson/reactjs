import React,{Component} from 'react';
import classes from './Person.css';
import withClassMod from '../../Hoc/withClassMod';
import PropTypes from 'prop-types';

class Person extends Component {

  render = ()=>{

  const personParentStyle = {
    border:'1px solid #ccc',
    borderRadius:'4px',

  };

  return (
    <div style={personParentStyle} >
    <p><b>{this.props.name} </b>from person,with {this.props.age} years old
    <br/>
      <small><i>Quote : {this.props.children}</i></small>
    </p>
    <input onChange={this.props.onChange} value={this.props.name} type="text"/>
    <button onClick={this.props.deleteClick} className={classes.delete_person_btn} >Delete</button>
    </div>
  )


};

}

export default withClassMod(Person,classes.person);

Person.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
}