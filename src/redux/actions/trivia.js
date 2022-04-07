export const GET_TOKEN = 'GET_TOKEN';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const actionGetToken = (data) => ({
  type: GET_TOKEN,
  data,
});

export const actionGetQuestions = (data) => ({
  type: GET_QUESTIONS,
  data,
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

export const fetchApiTrivia = async (token, quantity) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${token}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Erro encontrado Token API: ${error}`); // Provisório
  }
};

export const getQuestions = (token, quantity) => async (dispatch) => {
  // const RESPONSE_CODE = 3;
  const questionsData = await fetchApiTrivia(token, quantity);
  // if (questionsData.response_code === RESPONSE_CODE) {
  //   const refreshToken = dispatch(fetchApiToken());
  // }
  dispatch(actionGetQuestions(questionsData));
};
