import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cookie from "js-cookie";
import Router from "next/router";
import * as Actions from "../store/actions";

export default function useCookie() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkCookie() {
      const token = cookie.get("token");
      const apiUrl = `https://set-hust.appspot.com/api?type=checklogin&sessionid=${token}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 0) {
          // redirectOnError();
          dispatch(Actions.setRole(null));
          if (Router.pathname !== "/login") {
            Router.push("/");
          }
        } else {
          if (data.data && data.data.teacherId) {
            dispatch(Actions.setRole("teacher"));
            // Router.push("/teacher");
          } else {
            dispatch(Actions.setRole("student"));
            // Router.push("/student");
          }
        }
      } catch (error) {
        dispatch(Actions.setRole(null));
        if (Router.pathname !== "/login") {
          Router.push("/");
        }
      }
    }
    checkCookie();
  }, []);
}
