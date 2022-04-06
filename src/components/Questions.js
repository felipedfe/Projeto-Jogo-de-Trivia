import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchApiTrivia } from '../redux/actions';
import { fetchApiToken, actionGetQuestions } from '../redux/actions';
import QuestionCard from './QuestionCard';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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

  gameStart = async () => {
    const { saveQuestions } = this.props;
    const questions = await this.getQuestions();
    // console.log(questions);
    this.setState({
      loading: false,
    });
    saveQuestions(questions);
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
    const { loading } = this.state;
    return (
      <div className="questions-container">
        {loading
          ? <h1>LOADING...</h1>
          : <QuestionCard />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  quantity: state.settings.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestions: (questions) => dispatch(actionGetQuestions(questions)),
});

Questions.propTypes = {
  dispatch: PropTypes.func,
  quantity: PropTypes.number,
  token: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
