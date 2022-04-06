import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchApiTrivia } from '../redux/actions';
import { fetchApiToken } from '../redux/actions';

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
    this.getQuestions();
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

  getQuestions = async () => {
    const { token, quantity, dispatch} = this.props;
    console.log(token);
    const questions = await this.fetchApiTrivia(token, quantity);
    const RESPONSE_CODE = 3;
    if (questions.response_code === RESPONSE_CODE) {
      await dispatch(fetchApiToken());
      const retryQuestions = await this.fetchApiTrivia(token, quantity);
      return retryQuestions;
    }
    console.log(questions);
    return questions;
  }

  render() {
    return (
      <div className="questions-container">
        Questions
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
