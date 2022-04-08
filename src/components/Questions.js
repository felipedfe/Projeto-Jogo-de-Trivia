import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';
import { actionResetTimer, actionColorUpdate } from '../redux/actions';
import '../styles/questions.css';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexPosition: 0,
    };
  }

  nextHandler = () => {
    const { indexPosition } = this.state;
    const { questions: { results }, history, resetTime, updateColor } = this.props;
    const MAX_LENGTH = results.length - 1;
    if (indexPosition === MAX_LENGTH) {
      history.push('/feedback');
    } else {
      resetTime();
      updateColor(false);
      this.setState((prevState) => ({
        indexPosition: prevState.indexPosition + 1,
      }));
    }
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
    const { questions: { results }, stopTimer } = this.props;
    const currentQuestion = results[indexPosition];
    const shuffleAnswer = this.shuffleAnswers(currentQuestion);
    return (
      <div className="questions-container">
        <QuestionCard
          currentQuestion={ currentQuestion }
          shuffleAnswer={ shuffleAnswer }
        />
        { stopTimer && (
          <button
            type="button"
            data-testid="btn-next"
            className="nextBtn"
            onClick={ this.nextHandler }
          >
            Next
          </button>
        ) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questionsData,
  stopTimer: state.timer.stopTimer,
});

const mapDispatchToProps = (dispatch) => ({
  resetTime: () => dispatch(actionResetTimer()),
  updateColor: (colorAnswer) => dispatch(actionColorUpdate(colorAnswer)),
});

Questions.propTypes = {
  dispatch: PropTypes.func,
  quantity: PropTypes.number,
  token: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
