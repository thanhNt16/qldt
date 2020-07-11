import { useEffect } from "react";
import cookie from "js-cookie";
import Router from "next/router";

export default function useCookie() {
  useEffect(() => {
    async function checkCookie() {
      const token = cookie.get("token");
      const apiUrl = `https://set-hust.appspot.com/api?type=checklogin&sessionid=${token}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 0) {
          // redirectOnError();
          Router.push("/login");
        }
      } catch (error) {
        Router.push("/login");
      }
    }
    checkCookie();
  }, []);
}
