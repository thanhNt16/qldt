import React, { useEffect } from "react";
import Home from "src/view/home";
import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function home() {
  useCookies();

  return <Home />;
}

export default withAuthSync(home);
