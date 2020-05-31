import swal from "sweetalert";
import { call, put, take, takeEvery } from "redux-saga/effects";
import Router from "next/router";
import * as Actions from "src/store/actions";
import * as UserServices from "src/services/user.services";
import { login } from "src/utils/auth";

export function* loginRequest({ data }) {
  yield put({ type: Actions.SET_LOADING, data: true });
  try {
    const result = yield call(UserServices.loginWithPassword, data);
    if (result.status === 1) {
      yield put({ type: Actions.LOGIN_SUCCESS, data: { ...result.data } });
      yield put({ type: Actions.LOGIN_FAILED, data: null });
      yield put({ type: Actions.SET_LOADING, data: false });
      swal({
        text: "Đăng nhập thành công",
        title: "Thành công!",
        icon: "success",
      }).then(() => {
        // value && Router.push("/home");
        // console.log("data", result.data.sessionId);
        login({ token: result.data.sessionId });
      });
    } else {
      yield put({ type: Actions.LOGIN_FAILED, data: { ...result.data } });
      yield put({ type: Actions.SET_LOADING, data: false });
      swal({
        text: result.data,
        title: "Lỗi",
        icon: "error",
      });
    }
  } catch (error) {
    yield put({ type: Actions.LOGIN_FAILED, data: error });
    yield put({ type: Actions.SET_LOADING, data: false });
    swal({
      text: error,
      title: "Lỗi",
      icon: "error",
    });
  }
}

export function* watchLoginRequest() {
  yield takeEvery(Actions.LOGIN_REQUEST, loginRequest);
}
