import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonForm from './components/person';
import FormBuilder from './components/formBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        <FormBuilder modelName={'Person'}/> 
      </div>
    );
  }
}

export default App;
