export const LOGIN_REQUEST = "LOGIN REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_LOADING = "SET_LOADING";
export const SET_ROLE = "SET_ROLE";
export const SET_USER_DATA = "SET_USER_DATA";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

export function setUserData(data) {
  return {
    type: SET_USER_DATA,
    data,
  };
}

export function setRole(data) {
  return {
    type: SET_ROLE,
    data,
  };
}
