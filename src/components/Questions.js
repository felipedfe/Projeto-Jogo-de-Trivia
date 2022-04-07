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

  render() {
    const { indexPosition } = this.state;
    const { questions: { results } } = this.props;
    const currentQuestion = results[indexPosition];
    return (
      <div className="questions-container">
        <QuestionCard currentQuestion={ currentQuestion } />
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
