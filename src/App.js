import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

class App extends Component {
  render() {
    return (
      <div title="Core base element" id="_core_element" className="App">
      <h1>Starting New React App !...</h1>
      <p>This is really working, and its awesome too ...</p>
      <Person name="Arun" age="25"/>
      <Person name="Varun" age="25" >Brilliant Boy</Person>
      <Person name="Kiran" age="27" />
      {/*<Animal/>*/}
      </div>
      // <h1>Another Element</h1>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Starting React App !...'));

  }
}

export default App;
