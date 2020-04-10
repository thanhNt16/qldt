import { call, put, take, takeEvery } from "redux-saga/effects";
import * as services from "src/services";
import { LOGIN_REQUEST } from "src/store/actions";

export function* fetchData() {
  try {
    const data = yield call(services.simpleFetch);
    yield put({ type: "FETCH_SUCCEEDED", data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchData() {
  yield takeEvery(LOGIN_REQUEST, fetchData);
}
