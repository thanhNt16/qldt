import React from "react";
import Landing from "src/view/landing";
import useCookies from "src/hook/useCookie";

function landing() {
  useCookies();
  return <Landing />;
}

export default landing;
