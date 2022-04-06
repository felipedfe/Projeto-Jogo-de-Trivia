const INITIAL_STATE = {};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return action.data;
  default:
    return state;
  }
};

export default settings;
