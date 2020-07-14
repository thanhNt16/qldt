import auth from "./authReducer";
import home from "../view/home/reducers";
import project_teacher from "../view/project_teacher/reducers";
import schedule_teacher from "../view/schedule_teacher/reducers";

import { combineReducers } from "redux";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    home,
    project_teacher,
    schedule_teacher,
    ...asyncReducers,
  });

export default createReducer;
