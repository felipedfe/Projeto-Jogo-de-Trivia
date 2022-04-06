export const GET_TOKEN = 'GET_TOKEN';
export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';
// export const GET_QUESTIONS = 'GET_QUESTIONS';

export const actionGetToken = (data) => ({
  type: GET_TOKEN,
  data,
});

export const actionGetPlayerData = (playerName, hash) => ({
  type: GET_PLAYER_DATA,
  playerName,
  hash,
});

/* export const actionGetQuestions = (data) => ({
  type: GET_QUESTIONS,
  data,
}); */

export const fetchApiToken = () => async (dispatch) => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch(actionGetToken(data));
  } catch (error) {
    console.log(`Erro encontrado Token API: ${error}`); // Provisório
  }
};

/* export const fetchApiTrivia = (token, quantity) => async (dispatch) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${token}`);
    const data = await response.json();
    dispatch(actionGetQuestions(data));
  } catch (error) {
    console.log(`Erro encontrado Token API: ${error}`); // Provisório
  }
}; */
