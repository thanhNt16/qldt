import swal from "sweetalert";
import { call, put, take, takeEvery } from "redux-saga/effects";
import * as Actions from "src/store/actions";
import * as ProjectServices from "src/services/project.services";

export function* fetchProjects() {
  yield put({ type: Actions.SET_LOADING_PROJECT, data: true });
  try {
    const result = yield call(ProjectServices.getProjects);
    if (result.status === 1) {
      yield put({
        type: Actions.FETCH_PROJECTS_SUCCESS,
        data: { ...result.data },
      });
      yield put({ type: Actions.FETCH_PROJECTS_FAILED, data: null });
      yield put({ type: Actions.SET_LOADING_PROJECT, data: false });
    } else {
      yield put({
        type: Actions.FETCH_PROJECTS_FAILED,
        data: { ...result.data },
      });
      yield put({ type: Actions.SET_LOADING_PROJECT, data: false });
      swal({
        text: result.data,
        title: "Lỗi",
        icon: "error",
      });
    }
  } catch (error) {
    // yield put({ type: Actions.LOGIN_FAILED, data: error });
    // yield put({ type: Actions.SET_LOADING, data: false });
    // swal({
    //   text: error,
    //   title: "Lỗi",
    //   icon: "error",
    // });
  }
}

export function* watchFetchProjects() {
  yield takeEvery(Actions.FETCH_PROJECTS, fetchProjects);
}
