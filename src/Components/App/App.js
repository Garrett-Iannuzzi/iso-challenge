import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getStats } from '../../apiCalls';
import './App.scss';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import Rules from '../../Components/Rules/Rules';
import GameContainer from '../../Containers/GameContainer/GameContainer';


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
        <Route exact path='/' render={() => 
          <main>
            <Nav />
            <HomeContainer />
          </main>
          }
          />
        <Route path='/rules' render={() =>
          <main>
            <Nav />
            <Rules />
          </main>
          }
        />
        <Route path='/game' render={() =>
          <main>
            <Nav />
            <GameContainer />
          </main>
          }
        />
      </body>
    );
  }
}

export default App;
