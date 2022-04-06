import React, { Component } from 'react';
import HeaderPlay from '../components/HeaderPlay';

import '../styles/gameboard.css';

class GameBoard extends Component {
  render() {
    return (
      <div className="gameboard-container">
        <HeaderPlay />
      </div>
    );
  }
}

export default GameBoard;
