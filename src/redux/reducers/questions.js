import { GET_QUESTIONS } from '../actions/trivia';

const INITIAL_STATE = {};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return action.data;
  default:
    return state;
  }
};

export default questions;
