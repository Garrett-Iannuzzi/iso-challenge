import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers } from '../../apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    getPlayers(1)
      .then(res => this.setState({ players: res.data }))
  }

  render() {
    return (
      <main>
        <Route path='/' render={() => 
          <Nav /> 
          }
        />
      </main>
    );
  }
}

export default App;
