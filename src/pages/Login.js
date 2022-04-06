import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../trivia.png';
import { fetchApiToken } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      disableBtn: true,
    };
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

  playBtn = () => {
    const { tokenRequest } = this.props;
    tokenRequest();
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
            placeholder="Nome do Jogador"
            onChange={ this.inputHandler }
          />
          <input
            type="text"
            name="email"
            data-testid="input-gravatar-email"
            value={ email }
            placeholder="E-mail do Jogador"
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

const mapDispatchToProps = (dispatch) => ({
  tokenRequest: () => dispatch(fetchApiToken()),
});

Login.propTypes = {
  tokenRequest: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
