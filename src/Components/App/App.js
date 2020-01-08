import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './App.scss';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <Nav />
      </main>
    );
  }
}

export default App;
