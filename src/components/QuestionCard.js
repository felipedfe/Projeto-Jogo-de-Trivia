import React, { Component } from 'react';

class QuestionCard extends Component {
  render() {
    return (
      <div className="question-container">
        <h2 data-testid="question-category">Categoria</h2>
        <p data-testid="question-text">Pergunta</p>
      </div>
    );
  }
}

export default QuestionCard;
