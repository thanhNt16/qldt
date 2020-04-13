import auth from "./authReducer";
import home from "../view/home/reducers";
import { combineReducers } from "redux";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    home,
    ...asyncReducers,
  });

export default createReducer;
