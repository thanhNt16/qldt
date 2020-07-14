import swal from "sweetalert";
import { call, put, take, takeEvery } from "redux-saga/effects";
import * as Actions from "src/store/actions";
import * as ClassServices from "src/services/class.services";

export function* fetchClasses() {
  yield put({ type: Actions.SET_LOADING_CLASSES, data: true });
  try {
    const result = yield call(ClassServices.getClasses);
    if (result.status === 1) {
      yield put({
        type: Actions.FETCH_CLASSES_SUCCESS,
        data: { ...result.data },
      });
      yield put({ type: Actions.FETCH_CLASSES_FAILED, data: null });
      yield put({ type: Actions.SET_LOADING_CLASSES, data: false });
    } else {
      yield put({
        type: Actions.FETCH_CLASSES_FAILED,
        data: { ...result.data },
      });
      yield put({ type: Actions.SET_LOADING_CLASSES, data: false });
      swal({
        text: result.data,
        title: "Lỗi",
        icon: "error",
      });
    }
  } catch (error) {}
}

export function* watchFetchClasses() {
  yield takeEvery(Actions.FETCH_CLASSES, fetchClasses);
}
