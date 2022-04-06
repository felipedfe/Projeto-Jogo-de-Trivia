import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderPlay extends Component {
  render() {
    return (
      <div className="headerplay-container">
        avatar
        nome
        score
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  img: state.player.gravatarEmail,
  score: state.player.score,
});

export default connect(mapStateToProps)(HeaderPlay);
