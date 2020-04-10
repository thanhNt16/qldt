export const LOGIN_REQUEST = "LOGIN REQUEST";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}
