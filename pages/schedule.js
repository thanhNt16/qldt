import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ScheduleStudent from "src/view/schedule_student";
import ScheduleTeacher from "src/view/schedule_teacher";

import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function schedule() {
  const role = useSelector(({ auth }) => auth.role);

  useCookies();

  if (role === "teacher") {
    return <ScheduleTeacher />;
  }
  return <ScheduleStudent />;
}

export default withAuthSync(schedule);
