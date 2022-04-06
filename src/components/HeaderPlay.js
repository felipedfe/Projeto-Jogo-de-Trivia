import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderPlay extends Component {
  render() {
    const { name, img, score } = this.props;
    return (
      <div className="headerplay-container">
        <img
          data-testid="header-profile-picture"
          src={ img }
          alt={ `${name}-avatar` }
        />
        <p>
          Player:
          {' '}
          <span
            data-testid="header-player-name"
          >
            {name}
          </span>
        </p>
        <p>
          Score:
          {' '}
          <span
            data-testid="header-score"
          >
            {score}
          </span>
        </p>
      </div>
    );
  }
}

HeaderPlay.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  name: state.player.name,
  img: state.player.gravatarEmail,
  score: state.player.score,
});

export default connect(mapStateToProps)(HeaderPlay);
