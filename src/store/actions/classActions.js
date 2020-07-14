export const FETCH_CLASSES = "FETCH_CLASSES";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_FAILED = "FETCH_CLASSES_FAILED";
export const SET_LOADING_CLASSES = "SET_LOADING_CLASSES";

export function fetchClasses() {
  return {
    type: FETCH_CLASSES,
  };
}
