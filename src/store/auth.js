const initialState = {
  username: "",
  password: "",
  loading: false,
};

const authReducer = function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_SUCCEEDED": {
      return {
        ...state,
        username: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
