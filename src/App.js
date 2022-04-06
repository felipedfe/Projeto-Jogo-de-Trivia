import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import GameBoard from './pages/GameBoard';
import Settings from './pages/Settings';
import './styles/general.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/gameboard" component={ GameBoard } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}

export default App;
