import React, { Component } from 'react';

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
      <div className="login-container">
        <input
          type="text"
          name="name"
          data-testid="input-player-name"
          value={ name }
          onChange={ this.inputHandler }
        />
        <input
          type="text"
          name="email"
          data-testid="input-gravatar-email"
          value={ email }
          onChange={ this.inputHandler }
        />
        <button
          type="button"
          disabled={ disableBtn }
        >
          Play
        </button>
      </div>
    );
  }
}

export default Login;
