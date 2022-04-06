export const GET_TOKEN = 'GET_TOKEN';
export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';

export const actionGetToken = (data) => ({
  type: GET_TOKEN,
  data,
});

export const actionGetPlayerData = (playerName, hash) => ({
  type: GET_PLAYER_DATA,
  playerName,
  hash,
});

export const fetchApiToken = () => async (dispatch) => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch(actionGetToken(data));
  } catch (error) {
    console.log(`Erro encontrado Token API: ${error}`); // Provisório
  }
};
