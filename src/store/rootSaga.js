import { fork, all } from "redux-saga/effects";
// server sagas
// client sagas
import {
  watchLoginRequest,
  watchFetchProjects,
  watchFetchClasses,
} from "src/store/sagas";

export default function* root() {
  yield fork(watchLoginRequest);
  yield fork(watchFetchProjects);
  yield fork(watchFetchClasses);
}
