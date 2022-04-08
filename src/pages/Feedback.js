import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderPlay from '../components/HeaderPlay';

class Feedback extends Component {
  render() {
    const { correctAnswers, totalScore } = this.props;
    console.log(correctAnswers);
    const PASSING_SCORE = 3;
    return (
      <div>
        <HeaderPlay />
        <h2 data-testid="feedback-text">
          {correctAnswers < PASSING_SCORE
            ? <>Could be better...</>
            : <>Well Done!</>}

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
        </h2>
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
