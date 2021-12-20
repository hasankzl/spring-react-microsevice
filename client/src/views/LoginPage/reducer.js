import { LOGIN_ACTION, GET_USER, LOGOUT_ACTION } from "../../utils/actionTypes";

const initialState = {
  isLogin: !!localStorage.token,
  role: localStorage.role,
  user: {
    email: localStorage.email,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        login: { ...action.payload.login },
      };
    case LOGIN_ACTION:
      return {
        ...state,
        isLogin: true,
        role: action.payload.role,
        user: {
          email: action.payload.email,
        },
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        isLogin: false,
        user: {
          email: "",
        },
      };
    default:
      return state;
  }
};
