import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initalState = {
  token: null,
  userId: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initalState;
    // case SIGN_UP:
    //   return {
    //     token: null,
    //     userId: null,
    //   };
    default:
      return state;
  }
};
