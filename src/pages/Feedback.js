import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderPlay from '../components/HeaderPlay';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  playAgain = () => {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { correctAnswers, totalScore } = this.props;
    const { redirect } = this.state;
    console.log(correctAnswers);
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
          link="/"
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        { redirect && <Redirect to="/" /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correctAnswers: state.player.assertions,
  totalScore: state.player.score,
});

Feedback.propTypes = {
  correctAnswers: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
