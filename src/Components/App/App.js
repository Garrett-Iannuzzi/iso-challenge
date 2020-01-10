import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getStats } from '../../apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [],
      stats: []
    }
  }

  componentDidMount() {
    getPlayers(1)
      .then(res => this.setState({ players: res.data }))
    getStats()
      .then(res => this.setState({ stats: res.data }))
      .catch(err => console.log(err))
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
