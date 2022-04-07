export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';
export const CHANGE_TIMER = 'CHANGE_TIMER';
export const GET_SCORE = 'GET_SCORE';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const CHANGE_COLOR_BTN = 'CHANGE_COLOR_BTN';

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
