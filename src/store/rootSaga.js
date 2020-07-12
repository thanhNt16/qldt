import { fork, all } from "redux-saga/effects";
// server sagas
// client sagas
import { watchLoginRequest } from "src/store/authSagas";

export default function* root() {
  yield fork(watchLoginRequest);
}
