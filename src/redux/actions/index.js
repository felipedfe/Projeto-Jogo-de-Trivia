export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';

export const actionGetPlayerData = (playerName, hash) => ({
  type: GET_PLAYER_DATA,
  playerName,
  hash,
});
