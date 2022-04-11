import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  actionResetToken,
  actionResetQuestions,
  actionResetScore } from '../redux/actions';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      redirectLogin: false,
      infoRanking: [],
    };
  }

  componentDidMount() {
    this.loadingFinalRanking();
  }

  loadingFinalRanking = () => {
    const recoverRanking = JSON.parse(localStorage.getItem('ranking'));
    recoverRanking.sort((a, b) => b.totalScore - a.totalScore);
    this.setState({
      infoRanking: recoverRanking,
    });
  };

  resetStore = () => {
    const { resetToken, resetQuestions, resetScore } = this.props;
    resetToken();
    resetQuestions();
    resetScore();
  }

  playAgain = () => {
    this.resetStore();
    this.setState({
      redirectLogin: true,
    });
  }

  render() {
    const { redirectLogin, infoRanking } = this.state;
    return (
      <div>
        <p data-testid="ranking-title">Ranking</p>
        <ol>
          {
            infoRanking.map(({ image, name, totalScore }, index) => (
              <li key={ index }>
                <img
                  data-testid="input-gravatar-email"
                  src={ image }
                  alt={ `${name} - Avatar` }
                />
                <span data-testid={ `player-name-${index}` }>{ name }</span>
                <strong data-testid={ `player-score-${index}` }>{ totalScore }</strong>
              </li>
            ))
          }
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        {redirectLogin && <Redirect to="/" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetToken: () => dispatch(actionResetToken()),
  resetQuestions: () => dispatch(actionResetQuestions()),
  resetScore: () => dispatch(actionResetScore()),
});

Ranking.propTypes = {
  resetToken: PropTypes.func,
  resetQuestions: PropTypes.func,
  resetScore: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Ranking);
