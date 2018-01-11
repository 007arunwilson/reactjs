import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

class App extends Component {

  state = {
    persons:[
      {name:'Madison',age:26},
      {name:'Davidson',age:27},
      {name:'Pearson',age:28},
      {name:'Paulson',age:20},
    ]
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


  render() {
    return (
      <div title="Core base element" id="_core_element" className="App">
      <h1>Starting New React App !...</h1>
      <p>This is really working, and its awesome too ...</p>
      <button onClick={this.switchNameEventHandler} >Change Value</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      {/*<Animal/>*/}
      </div>
      // <h1>Another Element</h1>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Starting React App !...'));

  }
}

export default App;
