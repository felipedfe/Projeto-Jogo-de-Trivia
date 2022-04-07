import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import settings from './settings';
import questions from './questions';

const rootReducer = combineReducers({
  player,
  token,
  settings,
  questions,
});

export default rootReducer;
