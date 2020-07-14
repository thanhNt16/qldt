export const LOGIN_REQUEST = "LOGIN REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_LOADING = "SET_LOADING";
export const SET_ROLE = "SET_ROLE";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

export function setRole(data) {
  return {
    type: SET_ROLE,
    data,
  };
}
