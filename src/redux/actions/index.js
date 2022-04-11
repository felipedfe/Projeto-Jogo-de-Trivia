export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';
export const CHANGE_TIMER = 'CHANGE_TIMER';
export const GET_SCORE = 'GET_SCORE';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const CHANGE_COLOR_BTN = 'CHANGE_COLOR_BTN';
export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER';
export const RESET_TOKEN = 'RESET_TOKEN';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';
export const RESET_SCORE = 'RESET_SCORE';

export const actionGetPlayerData = (playerName, hash) => ({
  type: GET_PLAYER_DATA,
  playerName,
  hash,
});

export const actionChangeTimer = (time) => ({
  type: CHANGE_TIMER,
  time,
});

export const actionScore = (score) => ({
  type: GET_SCORE,
  score,
});

export const actionStopTimer = () => ({
  type: STOP_TIMER,
});

export const actionResetTimer = () => ({
  type: RESET_TIMER,
});

export const actionColorUpdate = (colorAnswer) => ({
  type: CHANGE_COLOR_BTN,
  colorAnswer,
});

export const actionAddCorrectAnswer = (answer) => ({
  type: ADD_CORRECT_ANSWER,
  answer,
});

export const actionResetToken = () => ({
  type: RESET_TOKEN,
});

export const actionResetQuestions = () => ({
  type: RESET_QUESTIONS,
});

export const actionResetScore = () => ({
  type: RESET_SCORE,
});
