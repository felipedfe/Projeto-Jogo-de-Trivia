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
    console.log('play');
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
        </div>
      </header>

    );
  }
}

export default Login;
