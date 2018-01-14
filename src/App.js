import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

class App extends Component {

  state = {
    persons:[
      {name:'Madison Madi',age:26},
      {name:'Davidson David',age:27},
      {name:'Pearson Pear',age:28},
      {name:'Paulson Paul',age:20},
      {name:'Erickson Erick',age:22},
    ],
    title:'Dynamic Random Title '+Math.random(),
    showPersons:false,
  }

switchNameEventHandler = () => {
  //console.log('Was CLicked');
  //Don't do this // this.state.persons[0].name = 'Madison Madi';
  this.setState({persons:[
    {name:'Madison Madi',age:26},
    {name:'Davidson David',age:27},
    {name:'Pearson Pear',age:28},
    {name:'Paulson Paul',age:20},
  ]})
}


changeDynamicTitle = (randomTitle,parameter2) => {

  this.setState({
    title:'Dynamic Random Title :'+randomTitle+'-'+parameter2,
  })

}

inputChangeHandler = (event) => {
  //console.log('Was CLicked');
  //Don't do this // this.state.persons[0].name = 'Madison Madi';
  this.setState({persons:[
    {name: event.target.value,age:26},
    {name:'Davidson David',age:27},
    {name:'Pearson Pear',age:28},
    {name:'Paulson Paul',age:20},
  ]})
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
      backgroundColor:'#fff',
      border:'1px solid #ccc',
      padding:'4px 16px',
      cursor:'pointer',
    }

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div className="perons-wrapper">
          {
            this.state.persons.map((person,index)=><Person name={person.name} age={person.age} click={this.deletePersonHandler.bind(this,index)} /> )
          }
        </div>
      )
    }

    return (
      <div title="Core base element" id="_core_element" className="App">
      <h1>Starting New React App !...</h1>
      <p>{this.state.title}</p>
      <button
        style={button_style}
         onClick={this.personsSwitcher} >Persons Toggler</button>
      <button
      style={button_style}
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

export default App;
