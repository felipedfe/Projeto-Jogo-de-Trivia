import { CHANGE_TIMER } from '../actions';

const INITIAL_STATE = 30;

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_TIMER:
    return action.time - 1;
  default:
    return state;
  }
};

export default timer;
