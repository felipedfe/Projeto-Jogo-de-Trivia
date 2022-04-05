export const GET_TOKEN = 'GET_TOKEN';

export const actionGetToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  dispatch(actionGetToken(data.token));
};
