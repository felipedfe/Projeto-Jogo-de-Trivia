import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexPosition: 0,
      // nextDisable: true,
    };
  }

  shuffleAnswers = (currentQuestion) => {
    const { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = currentQuestion;
    const SHUFFLE_NUMBER = 0.5;
    return [correctAnswer, ...incorrectAnswers]
      .sort(() => Math.random() - SHUFFLE_NUMBER); // https://flaviocopes.com/how-to-shuffle-array-javascript/
  }

  render() {
    const { indexPosition } = this.state;
    const { questions: { results } } = this.props;
    const currentQuestion = results[indexPosition];
    const shuffleAnswer = this.shuffleAnswers(currentQuestion);
    return (
      <div className="questions-container">
        <QuestionCard
          currentQuestion={ currentQuestion }
          shuffleAnswer={ shuffleAnswer }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
});

Questions.propTypes = {
  dispatch: PropTypes.func,
  quantity: PropTypes.number,
  token: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Questions);
