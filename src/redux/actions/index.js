export const GET_TOKEN = 'GET_TOKEN';

export const actionGetToken = (data) => ({
  type: GET_TOKEN,
  data,
});

export const fetchApiToken = () => async (dispatch) => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch(actionGetToken(data));
  } catch (error) {
    console.log(`Erro encontrado: ${error}`); // Provisório
  }
};
