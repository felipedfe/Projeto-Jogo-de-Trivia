import { GET_TOKEN } from '../actions/trivia';
import { RESET_TOKEN } from '../actions';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return action.data.token;
  case RESET_TOKEN:
    return '';
  default:
    return state;
  }
};

export default token;
