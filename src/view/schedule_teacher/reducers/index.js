import * as Actions from "src/store/actions";

const initialState = {
  classes: [],
  classesError: null,
  classesLoading: false,
};

const scheduleTeacherReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CLASSES_SUCCESS: {
      return {
        ...state,
        classes: action.data,
      };
    }
    case Actions.FETCH_CLASSES_FAILED: {
      return {
        ...state,
        classesError: action.data,
      };
    }
    case Actions.SET_LOADING_CLASSES: {
      return {
        ...state,
        classesLoading: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleTeacherReducer;
