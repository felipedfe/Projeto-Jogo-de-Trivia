export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';
export const CHANGE_TIMER = 'CHANGE_TIMER';

export const actionGetPlayerData = (playerName, hash) => ({
  type: GET_PLAYER_DATA,
  playerName,
  hash,
});

export const actionChangeTimer = (time) => ({
  type: CHANGE_TIMER,
  time,
});
