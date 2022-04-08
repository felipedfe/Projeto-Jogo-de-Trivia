import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderPlay from '../components/HeaderPlay';
import Questions from '../components/Questions';
import Timer from '../components/Timer';

import '../styles/gameboard.css';

class GameBoard extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="gameboard-container">
        <HeaderPlay />
        <Timer />
        <Questions history={ history } />
      </div>
    );
  }
}

GameBoard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default GameBoard;
