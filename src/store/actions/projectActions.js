export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILED = "FETCH_PROJECTS_FAILED";
export const SET_LOADING_PROJECT = "SET_LOADING_PROJECT";
export const SET_FILTER_OPTION_PROJECT = "SET_FILTER_OPTION_PROJECT";
export const SET_PROJECTS = "SET_PROJECTS";

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
  };
}
export function setFilterOptionsProject(options) {
  return {
    type: SET_FILTER_OPTION_PROJECT,
    data: options,
  };
}
export function setProjects(data) {
  return {
    type: SET_PROJECTS,
    data,
  };
}
