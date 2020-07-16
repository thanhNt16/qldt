import React from "react";
import Landing from "src/view/landing";
import useCookies from "src/hook/useCookie";
import Head from "src/components/Head";

function landing() {
  useCookies();
  return (
    <React.Fragment>
      <Head title="Trang chủ" /> <Landing />{" "}
    </React.Fragment>
  );
}

export default landing;
