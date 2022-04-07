import { CHANGE_TIMER, STOP_TIMER } from '../actions';

const INITIAL_STATE = {
  count: 30,
  stopTimer: false,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_TIMER:
    return {
      ...state,
      count: state.count - 1,
    };
  case STOP_TIMER:
    return {
      ...state,
      stopTimer: true,
    };
  default:
    return state;
  }
};

export default timer;
