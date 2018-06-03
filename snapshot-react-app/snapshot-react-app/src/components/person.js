import React, { Component } from 'react';
// import HOF
export default class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    // const propertyArray = props.properties;
    // this.state = this.createStateNames(['givenName', 'surName', 'birthDate', 'gender']);
    this.state = this.createStateNames(this.props.propertyNames);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // Calls external server for Person model and finds relevant fields to set state
    // createFields();
  }

  createStateNames(propertyNames) {
    var stateObj = {};
    propertyNames.forEach((name) => {
      stateObj[name] = ''
    });
    return stateObj;
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log('Save to database');
    // HOF.create('persons')
    // call HOF with state to perform CRUD
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.container}>
        <label>
          Given Name:
          <input type="text" name={'givenName'} value={this.state.givenName} onChange={this.handleChange} />
        </label>
        <label>
          Sur Name:
          <input type="text" name={'surName'} value={this.state.surName} onChange={this.handleChange} />
        </label>
        <label>
          Birth Date:
          <input type="text" name={'birthDate'} value={this.state.birthDate} onChange={this.handleChange} />
        </label>
        <label>
          Gender:
          <input type="text" name={'gender'} value={this.state.gender} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
}
