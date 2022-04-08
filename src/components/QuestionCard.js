import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionScore,
  actionStopTimer,
  actionColorUpdate,
  actionAddCorrectAnswer } from '../redux/actions';

class QuestionCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clickedAnswer: false,
  //   };
  // }

  difficultyHandler = (difficulty) => {
    const hardPoint = 3;
    const mediumPoint = 2;
    const easyPoint = 1;

    switch (difficulty) {
    case 'hard':
      return hardPoint;
    case 'medium':
      return mediumPoint;
    default:
      return easyPoint;
    }
  }

  scoreHandler = (answer) => {
    const { currentQuestion: { difficulty }, sendScore, timer, breakTime } = this.props;
    if (answer === 'correctAnswer') {
      const MIN_SCORE = 10;
      const difficultyScale = this.difficultyHandler(difficulty);
      const score = MIN_SCORE + (timer * difficultyScale);
      sendScore(score);
    }
    breakTime();
  }

  answerHandler = (answer) => {
    // this.setState({
    //   clickedAnswer: true,
    // });
    const { updateColor, correctAnswer } = this.props;
    updateColor(true);
    if (answer === 'correctAnswer') correctAnswer(answer);
    this.scoreHandler(answer);
  }

  answers = (shuffleAnswer, correctAnswer, incorrectAnswers) => {
    // const { clickedAnswer } = this.state;
    const { timer, clickedAnswer } = this.props;
    return (
      <div
        data-testid="answer-options"
        className="answers-container"
      >
        {shuffleAnswer.map((answer) => {
          const incorrectIndex = incorrectAnswers.indexOf(answer);
          const classLabel = answer === correctAnswer
            ? 'correctAnswer'
            : 'incorretAnswer';
          const dataTestLabel = answer === correctAnswer
            ? 'correct-answer'
            : `wrong-answer-${incorrectIndex}`;
          return (
            <button
              key={ answer }
              type="button"
              disabled={ timer === 0 }
              data-testid={ dataTestLabel }
              className={ clickedAnswer ? classLabel : 'answers-standard-button' }
              onClick={ () => this.answerHandler(classLabel) }
            >
              {answer}
            </button>);
        })}
      </div>
    );
  }

  render() {
    const { currentQuestion: {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      category, question }, shuffleAnswer } = this.props;
    return (
      <div className="question-container">
        <h2 data-testid="question-category">{ category }</h2>
        <h1 data-testid="question-text">{ question }</h1>
        {this.answers(shuffleAnswer, correctAnswer, incorrectAnswers)}
      </div>
    );
  }
}

QuestionCard.propTypes = {
  incorrect_answer: PropTypes.arrayOf(PropTypes.string),
  correct_answers: PropTypes.string,
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  timer: state.timer.count,
  clickedAnswer: state.questions.colorAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  sendScore: (score) => dispatch(actionScore(score)),
  breakTime: () => dispatch(actionStopTimer()),
  updateColor: (colorAnswer) => dispatch(actionColorUpdate(colorAnswer)),
  correctAnswer: (answer) => dispatch(actionAddCorrectAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
