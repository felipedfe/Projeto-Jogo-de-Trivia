import { GET_QUESTIONS } from '../actions/trivia';
import { CHANGE_COLOR_BTN, RESET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questionsData: {},
  colorAnswer: false,
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questionsData: action.data,
    };
  case CHANGE_COLOR_BTN:
    return {
      ...state,
      colorAnswer: action.colorAnswer,
    };
  case RESET_QUESTIONS:
    return {
      ...state,
      questionsData: {},
      colorAnswer: false,
    };
  default:
    return state;
  }
};

export default questions;
