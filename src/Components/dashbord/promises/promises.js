import React, {Component}from 'react';

import axios from 'axios';

export default class promises extends Component {
    constructor(){
        super();
       this.state = {
            persons: []
          }
    }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }
    render() {
        return (
          <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
        )
      }
    }