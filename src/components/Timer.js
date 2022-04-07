import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeTimer } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timerId: undefined,
    };
  }

  componentDidMount() {
    const ONESECOND = 1000;
    const timerId = setInterval(this.countdown, ONESECOND);
    this.setState({
      timerId,
    });
  }

  countdown = () => {
    const { timer, changeTimer } = this.props;
    const { timerId } = this.state;
    if (timer === 0) {
      clearInterval(timerId);
    } else {
      changeTimer(timer);
      console.log(timer);
    }
  }

  render() {
    const { timer } = this.props;
    return (
      <p>{ timer }</p>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  changeTimer: (time) => dispatch(actionChangeTimer(time)),
});

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
