import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getStats } from '../../apiCalls';
import './App.scss';
import { connect } from 'react-redux';
import { getPlayerInfo, getStatsInfo } from '../../actions/actions';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import Rules from '../../Components/Rules/Rules';
import GameContainer from '../../Containers/GameContainer/GameContainer';


export class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    getPlayers(1)
    .then(res => this.props.playerInfo(res.data))
    getStats()
    .then(res => this.props.statsInfo(res.data))
    .catch(err => console.log(err))
    console.log(this.props.statsInfo)
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

export const mapDispatchToProps = dispatch => ({
  playerInfo: players => dispatch(getPlayerInfo(players)),
  statsInfo: stats => dispatch(getStatsInfo(stats))
})

export default connect(null, mapDispatchToProps)(App)
