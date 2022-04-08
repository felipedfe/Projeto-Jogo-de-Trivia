import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderPlay from '../components/HeaderPlay';

class Feedback extends Component {
  render() {
    const { correctAnswers } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correctAnswers: state.questions.correctAnswers,
});

Feedback.propTypes = {
  correctAnswers: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
