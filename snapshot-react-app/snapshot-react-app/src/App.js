import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonForm from './components/person';
import FormBuilder from './components/formBuilder';
import ListPersons from './components/listPersons';

// <FormBuilder modelName={'Person'}/>
class App extends Component {
  render() {
    return (
      <div className="App">
         <ListPersons />
      </div>
    );
  }
}

export default App;
