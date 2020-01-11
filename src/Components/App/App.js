import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import { getPlayers, getStats } from '../../apiCalls';
import './App.scss';
import HomeContainer from '../../Containers/HomeContainer/HomeContainer';
import Rules from '../../Components/Rules/Rules';


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
        {/* <Route path='/home' render={() => 
        }>
        </Route> */}
      </body>
    );
  }
}

export default App;
