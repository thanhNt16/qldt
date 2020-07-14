import * as Actions from "./actions";

const initialState = {
  userData: null,
  error: null,
  loading: false,
  role: null,
};

const authReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS: {
      return {
        ...state,
        userData: action.data,
      };
    }
    case Actions.LOGIN_FAILED: {
      return {
        ...state,
        error: action.data,
      };
    }
    case Actions.SET_LOADING: {
      return {
        ...state,
        loading: action.data,
      };
    }
    case Actions.SET_ROLE: {
      return {
        ...state,
        role: action.data,
      };
    }
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        userData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
