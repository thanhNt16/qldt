export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILED = "FETCH_PROJECTS_FAILED";
export const SET_LOADING_PROJECT = "SET_LOADING_PROJECT";

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
  };
}
