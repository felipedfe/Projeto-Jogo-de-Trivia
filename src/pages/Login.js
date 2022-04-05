import React, { Component } from 'react';
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

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
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
            disabled={ disableBtn }
          >
            Play
          </button>
        </div>
      </header>

    );
  }
}

export default Login;
