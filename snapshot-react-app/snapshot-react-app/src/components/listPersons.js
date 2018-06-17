import React, { Component } from 'react';

export default class ListPersons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personsList: ['Michael', 'Corey', 'Jeremy'],
      actualPersons: []
    }
  }

  // function to get persons
  getPersons() {
    console.log('get persons');
    // return fetch('/herokuUrl/persons');
    return new Promise((resolve, reject) => {
      resolve(this.state.personsList);
    }).then((personsList) => {
        console.log(personsList)
        this.setState({actualPersons: personsList})
      })
  }

  render() {
    if (this.state.actualPersons.length == 0) {
      console.log('no persons')
      console.log(this.state.personsList)
      this.getPersons()
    }
    return (
      this.state.actualPersons.map((person) =>
        <li>{person}</li>
      )
    )
  }
}
