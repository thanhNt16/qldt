import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ScheduleStudent from "src/view/schedule_student";
import ScheduleTeacher from "src/view/schedule_teacher";
import Head from "src/components/Head";

import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function schedule() {
  const role = useSelector(({ auth }) => auth.role);

  useCookies();

  if (role === "teacher") {
    return (
      <React.Fragment>
        <Head />
        <ScheduleTeacher />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Head />
      <ScheduleStudent />
    </React.Fragment>
  );
}

export default withAuthSync(schedule);
