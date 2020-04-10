import { fork, all } from "redux-saga/effects";
// server sagas
// client sagas
import { watchFetchData } from "src/store/authSagas";

export default function* root() {
  yield all([fork(watchFetchData)]);
}
