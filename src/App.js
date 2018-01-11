import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div title="Core base element" id="_core_element" className="App">
      <h1>Starting New React App !...</h1>
      <p>This is really working, and its awesome too ...</p>
      <Person/>
      </div>
      // <h1>Another Element</h1>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Starting React App !...'));

  }
}

export default App;
