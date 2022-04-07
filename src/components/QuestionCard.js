import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAnswer: false,
    };
  }

  answerHandler = () => {
    this.setState({
      clickedAnswer: true,
    });
  }

  answers = (shuffleAnswer, correctAnswer, incorrectAnswers) => {
    const { clickedAnswer } = this.state;
    // const SHUFFLE_NUMBER = 0.5;
    // const allAnswers = [correctAnswer, ...incorrectAnswers]
    //   .sort(() => Math.random() - SHUFFLE_NUMBER); // https://flaviocopes.com/how-to-shuffle-array-javascript/
    return (
      <div data-testid="answer-options">
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
              data-testid={ dataTestLabel }
              className={ clickedAnswer ? classLabel : '' }
              onClick={ this.answerHandler }
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

export default QuestionCard;
