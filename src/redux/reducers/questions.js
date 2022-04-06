import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return action.data.results;
  default:
    return state;
  }
};

export default questions;
