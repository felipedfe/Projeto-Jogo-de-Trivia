import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import settings from './settings';
import questions from './questions';
import timer from './timer';

const rootReducer = combineReducers({
  player,
  token,
  settings,
  questions,
  timer,
});

export default rootReducer;
