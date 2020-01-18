import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getNextPlayerPage } from '../../apiCalls';
import './App.scss';
import { connect } from 'react-redux';
import { getPlayerInfo } from '../../actions/actions';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import Rules from '../../Components/Rules/Rules';
import GameContainer from '../../Containers/GameContainer/GameContainer';
import ScoreBoard from '../../Containers/ScoreBoard/ScoreBoard';
import PropTypes from 'prop-types';


export class App extends Component {

  async componentDidMount() {
    await getPlayers(1)
    .then(res => {
      this.props.playerInfo(res.data)
      getNextPlayerPage(res, this.props.playerInfo)
    })
    .catch(err => console.log(err))
  }

  render() {
    return ( 
      <body>
        <Route exact path='/' render={({ history }) => 
          <main>
            <Nav />
            <HomeContainer history={ history } />
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
        <Route path='/score' render={() =>
          <main>
            <Nav />
            <ScoreBoard />
          </main>
          }
        />
      </body>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  playerInfo: players => dispatch(getPlayerInfo(players)),
})

export default connect(null, mapDispatchToProps)(App)

App.propTypes = {
  playerInfo: PropTypes.func
}