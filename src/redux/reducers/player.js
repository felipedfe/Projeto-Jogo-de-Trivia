import { GET_PLAYER_DATA, GET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_PLAYER_DATA: {
    const gravatarURL = `https://www.gravatar.com/avatar/${action.hash}`;
    return {
      ...state,
      name: action.playerName,
      gravatarEmail: gravatarURL,
    };
  }
  case GET_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};

export default player;
