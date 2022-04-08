import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderPlay from '../components/HeaderPlay';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      redirectLogin: false,
    };
  }

  playAgain = () => {
    this.setState({
      redirectLogin: true,
    });
  }

  render() {
    const { redirectLogin } = this.state;
    return (
      <div>
        <HeaderPlay />
        <p data-testid="ranking-title">Ranking</p>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        { redirectLogin && <Redirect to="/" /> }
      </div>
    );
  }
}

export default Ranking;
