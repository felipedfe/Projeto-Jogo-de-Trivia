import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderPlay from '../components/HeaderPlay';
import {
  actionResetToken,
  actionResetQuestions,
  actionResetScore } from '../redux/actions';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      redirectLogin: false,
      redirectRanking: false,
    };
  }

  componentDidMount() {
    this.getPlayerInfo();
  }

  getPlayerInfo = () => {
    const { totalScore, name, image } = this.props;
    const playerInfoData = {
      image,
      name,
      totalScore,
    };
    const rankingData = JSON.parse(localStorage.getItem('ranking')) || [];
    localStorage.setItem('ranking', JSON.stringify([...rankingData, playerInfoData]));
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

  goToRanking = () => {
    this.setState({
      redirectRanking: true,
    });
  }

  render() {
    const { correctAnswers, totalScore } = this.props;
    const { redirectLogin, redirectRanking } = this.state;
    const PASSING_SCORE = 3;
    return (
      <div>
        <HeaderPlay />
        <h2 data-testid="feedback-text">
          {correctAnswers < PASSING_SCORE
            ? <>Could be better...</>
            : <>Well Done!</>}
        </h2>

        <p>
          Você acertou um total de
          {' '}
          <strong
            data-testid="feedback-total-question"
          >
            {correctAnswers}
          </strong>
          {' '}
          perguntas.
        </p>
        <h3>
          Total de pontos:
          {' '}
          <strong
            data-testid="feedback-total-score"
          >
            {totalScore}
          </strong>
        </h3>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.goToRanking }
        >
          Ranking
        </button>
        { redirectLogin && <Redirect to="/" /> }
        { redirectRanking && <Redirect to="/ranking" /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correctAnswers: state.player.assertions,
  totalScore: state.player.score,
  name: state.player.name,
  image: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  resetToken: () => dispatch(actionResetToken()),
  resetQuestions: () => dispatch(actionResetQuestions()),
  resetScore: () => dispatch(actionResetScore()),
});

Feedback.propTypes = {
  correctAnswers: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
