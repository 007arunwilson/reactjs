import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component {

  constructor(props){

    super(props);

  }
  
  

  componentWillMount = () => {

    console.log('Compoenent Will Mount Called ..');

  }

  componentDidMount = () => {

    console.log('Compoenent Did Mount Called ..');

  }

  componentWillUnmount = () => {

    console.log('Compoenent Un Mount Called ..');

  }

  render = ()=>{

  const personParentStyle = {
    border:'1px solid #ccc',
    borderRadius:'4px',

  };

  return (
    <div style={personParentStyle} className={classes.person} >
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

export default Person;
