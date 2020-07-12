import * as Actions from "src/store/actions";

const initialState = {
  projects: [],
  projectError: null,
  projectLoading: false,
};

const homeReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.data,
      };
    }
    case Actions.FETCH_PROJECTS_FAILED: {
      return {
        ...state,
        projectError: action.data,
      };
    }
    case Actions.SET_LOADING_PROJECT: {
      return {
        ...state,
        projectLoading: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
