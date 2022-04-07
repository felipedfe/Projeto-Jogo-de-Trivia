import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

import { connect } from 'react-redux';
import { actionGetPlayerData } from '../redux/actions';
import { fetchApiToken, getQuestions } from '../redux/actions/trivia';

import logo from '../trivia.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      disableBtn: true,
    };
  }

  componentDidUpdate() {
    const { token, quantity, saveQuestions, questions, history } = this.props;

    if (token && !questions.results) saveQuestions(token, quantity);
    if (questions.results) history.push('/gameboard');
  }

  inputValidation = () => {
    const { name, email } = this.state;

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g; // fonte regex https://regexr.com/3e48o
    const emailTest = regex.test(email);
    const nameTest = name.length;

    this.setState({
      disableBtn: !(emailTest && nameTest),
    });
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.inputValidation());
  }

  loadingPlayerData = () => {
    const { savePlayerData } = this.props;
    const { name, email } = this.state;

    const emailHash = md5(email).toString();
    savePlayerData(name, emailHash);
  }

  playBtn = () => {
    const { tokenRequest } = this.props;
    tokenRequest();
    this.loadingPlayerData();
  }

  settingsBtn = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { name, email, disableBtn } = this.state;
    return (
      <header className="wrapper-container">
        <img src={ logo } className="App-logo" alt="logo" />
        <div className="login-container">
          <input
            type="text"
            name="name"
            data-testid="input-player-name"
            value={ name }
            placeholder="Insert Player Name"
            onChange={ this.inputHandler }
          />
          <input
            type="text"
            name="email"
            data-testid="input-gravatar-email"
            value={ email }
            placeholder="Insert Player E-mail"
            onChange={ this.inputHandler }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ disableBtn }
            onClick={ this.playBtn }
          >
            Play
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.settingsBtn }
          >
            Settings
          </button>
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  quantity: state.settings.quantity,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  tokenRequest: () => dispatch(fetchApiToken()),
  savePlayerData: (playerName, hash) => dispatch(actionGetPlayerData(playerName, hash)),
  saveQuestions: (token, quantity) => dispatch(getQuestions(token, quantity)),
});

Login.propTypes = {
  tokenRequest: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  savePlayerData: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
