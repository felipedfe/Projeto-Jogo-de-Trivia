import React, { Component } from 'react';
import HeaderPlay from '../components/HeaderPlay';
import Questions from '../components/Questions';

import '../styles/gameboard.css';

class GameBoard extends Component {
  render() {
    return (
      <div className="gameboard-container">
        <HeaderPlay />
        <Questions />
      </div>
    );
  }
}

export default GameBoard;
