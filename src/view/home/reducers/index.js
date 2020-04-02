const initialState = {
  success: false,
  error: {
    username: null,
    password: null
  }
};

const homeReducer = function(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default homeReducer;
