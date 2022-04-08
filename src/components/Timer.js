import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeTimer, actionStopTimer } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timerId: undefined,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { timerId } = this.state;
    const { timer } = this.props;
    const START_COUNT = 30;
    if (timer === START_COUNT && !timerId) {
      this.startTimer();
    }
  }

  startTimer = () => {
    const ONESECOND = 1000;
    const timerId = setInterval(this.countdown, ONESECOND);
    this.setState({
      timerId,
    });
  }

  countdown = () => {
    const { timer, changeTimer, stopTimer, breakTime } = this.props;
    const { timerId } = this.state;
    if (timer === 0 || stopTimer) {
      clearInterval(timerId);
      breakTime();
      this.setState({
        timerId: undefined,
      });
    } else {
      changeTimer();
    }
  }

  render() {
    const { timer } = this.props;
    return (
      <h1 className="timer-container">{ timer }</h1>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  changeTimer: (time) => dispatch(actionChangeTimer(time)),
  breakTime: () => dispatch(actionStopTimer()),
});

const mapStateToProps = (state) => ({
  timer: state.timer.count,
  stopTimer: state.timer.stopTimer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
