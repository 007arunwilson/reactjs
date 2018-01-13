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


personsSwitcher = ()=>{
  const current_state = this.state.showPersons;
  this.setState({showPersons:!current_state});
}


  render() {

    const button_style = {
      backgroundColor:'#fff',
      border:'1px solid #ccc',
      padding:'4px 16px',
      borderRadius:'8px !important;',
      cursor:'pointer',
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
      {this.state.showPersons?
        <div className="perons-wrapper">

          <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          onchangefn={this.inputChangeHandler}/>

          <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />

          <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        </div>
        :null

      }

      {/*<Animal/>*/}
      </div>
      // <h1>Another Element</h1>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Starting React App !...'));

  }
}

export default App;
