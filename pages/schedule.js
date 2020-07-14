import React, { useEffect } from "react";
import Schedule from "src/view/schedule";
import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function schedule() {
    useCookies();

    return <Schedule />;
}

export default withAuthSync(schedule);
