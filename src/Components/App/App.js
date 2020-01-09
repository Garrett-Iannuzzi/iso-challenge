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
    const all = getPlayers()
      .then(res => this.setState({ players: res }))
    console.log('all', all)  
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
