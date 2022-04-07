import React, { Component } from 'react';
import HeaderPlay from '../components/HeaderPlay';

class Feedback extends Component {
  render() {
    return (
      <div>
        <HeaderPlay />
        <p data-testid="feedback-text">FeedBack</p>
      </div>
    );
  }
}

export default Feedback;
