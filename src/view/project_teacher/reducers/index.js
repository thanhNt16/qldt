import * as Actions from "src/store/actions";

const initialState = {
  projects: [],
  baseProjects: [],
  projectError: null,
  projectLoading: false,
  checkOptions: null,
};

const projectTeacherReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.data,
        baseProjects: action.data,
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
    case Actions.SET_FILTER_OPTION_PROJECT: {
      return {
        ...state,
        checkOptions: action.data,
      };
    }
    case Actions.SET_PROJECTS: {
      return {
        ...state,
        projects: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default projectTeacherReducer;
