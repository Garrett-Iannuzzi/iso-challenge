import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getStats } from '../../apiCalls';
import './App.scss';
import { HomeContainer } from '../../Containers/HomeContainer/HomeContainer';

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
      <body>
          <Route path='/' render={() => 
        <main>
            <Nav />
            <HomeContainer />
        </main>
          }
          />
      </body>
    );
  }
}

export default App;
