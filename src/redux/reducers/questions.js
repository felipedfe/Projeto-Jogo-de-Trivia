import { GET_QUESTIONS } from '../actions/trivia';
import { CHANGE_COLOR_BTN, ADD_CORRECT_ANSWER } from '../actions';

const INITIAL_STATE = {
  questionsData: {},
  colorAnswer: false,
  correctAnswers: 0,
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
  case ADD_CORRECT_ANSWER:
    return {
      ...state,
      correctAnswers: state.correctAnswers + 1,
    };
  default:
    return state;
  }
};

export default questions;
