import React, { Component } from 'react';
import PersonForm from './person';
// render all of the HOC forms and pass in property names from API call here
export default class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelName: this.props.model
    }
  }

  buildForm(modelName) {
    console.log('model name');
    // make API call given model name and return properties
    const propertyNames = ['givenName', 'surName', 'birthDate', 'gender'];
    // return HOC(PersonForm, propertyNames);
    return <PersonForm propertyNames={propertyNames} />
  }

  render() {
    // use models state to pass in each model name to buildForm and render all forms
    return (
      this.buildForm(this.state.modelName)
    )
  }
}
