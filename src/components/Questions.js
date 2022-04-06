import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchApiTrivia } from '../redux/actions';
import { fetchApiToken } from '../redux/actions';
import QuestionCard from './QuestionCard';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsArray: [],
      indexArray: 0,
      // nextDisable: true,
    };
  }

  componentDidMount() {
    this.gameStart();
  }

  fetchApiTrivia = async (token, quantity) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${token}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Erro encontrado Token API: ${error}`); // Provisório
    }
  }

  gameStart = () => {
    const questions = this.getQuestions();
    this.setState({
      questionsArray: questions.results,
    });
  }

  getQuestions = async () => {
    const { token, quantity, dispatch } = this.props;
    const questions = await this.fetchApiTrivia(token, quantity);
    const RESPONSE_CODE = 3;
    if (questions.response_code === RESPONSE_CODE) {
      await dispatch(fetchApiToken());
      const retryQuestions = await this.fetchApiTrivia(token, quantity);
      return retryQuestions;
    }
    return questions;
  }

  render() {
    const { questionsArray, indexArray } = this.state;
    const currentQuestion = questionsArray[indexArray];
    return (
      <div className="questions-container">
        <QuestionCard currentQuestion={ currentQuestion } />
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispatch) => ({
  questions: (token, quantity) => dispatch(fetchApiTrivia(token, quantity)),
}); */

const mapStateToProps = (state) => ({
  token: state.token,
  quantity: state.settings.quantity,
});

export default connect(mapStateToProps)(Questions);
