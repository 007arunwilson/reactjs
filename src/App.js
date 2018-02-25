import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Persons/Persons';
import Animal from './Animal/Animal';
import withClassMod from './Hoc/withClassMod';

class App extends Component {

  state = {
    persons:[
      {id:1,name:'Madison Madi',age:26},
      {id:2,name:'Paulson Paul',age:56},
    ],
    title:'Dynamic Random Title '+Math.random(),
    showPersons:false,
  }

changeDynamicTitle = (randomTitle,parameter2) => {

  this.setState({
    title:'Dynamic Random Title :'+randomTitle+'-'+parameter2,
  })

}

inputChangeHandler = (event,personId) => {

  const personIndex = this.state.persons.findIndex(person => {
    return person.id===personId;
  });

  const persons = [...this.state.persons];
  const person = persons[personIndex];

  person.name = event.target.value;
  persons[personIndex] = person;
  this.setState({persons:persons});


}


deletePersonHandler = ( deleteIndex )=>{

  console.log(deleteIndex);

  let personsList = [...this.state.persons];
  personsList.splice(deleteIndex,1)
  this.setState({persons:personsList});

}


personsSwitcher = ()=>{
  const current_state = this.state.showPersons;
  this.setState({showPersons:!current_state});
}


  render() {

    const button_style = {
      backgroundColor:'#FF5733',
      color:'#fff',
      border:'1px solid #ccc',
      padding:'4px 16px',
      cursor:'pointer',
    }


    const toggle_button_style = {
      backgroundColor:'#FF5733',
      color:'#fff',
      border:'1px solid #ccc',
      padding:'4px 16px',
      cursor:'pointer',
      ':hover':{
        textDecoration:'underline',
      }
    }

    let persons = null;

    if(this.state.showPersons)
    {

      toggle_button_style.backgroundColor = '#54AD00';
      toggle_button_style[':hover'] = {
        backgroundColor:'#0083AD',
        color:'#B7EEFF',
      }

      persons = (
        <Persons 
        persons={this.state.persons} 
        inputChangeHandler={this.inputChangeHandler}
        deletePersonHandler={this.deletePersonHandler} />
      )


    }

    return (
      <div title="Core base element" id="_core_element" className={classes.App}>
      <h1 className={classes.app_title} >Starting New React App !...</h1>
      <p>{this.state.title}</p>
      <button
        style={toggle_button_style}
         onClick={this.personsSwitcher} >Persons Toggler</button>
      <button
       onClick={this.changeDynamicTitle.bind(this,Math.random(),'Parameter 2')} >Action Button</button>
      <hr/>

      {persons}

      {/*<Animal/>*/}
      </div>
      // <h1>Another Element</h1>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Starting React App !...'));

  }
}

export default withClassMod(App,'app-container');
