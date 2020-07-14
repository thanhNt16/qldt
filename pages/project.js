import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectTeacher from "src/view/project_teacher";
import ProjectStudent from "src/view/project_student";

import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function Project() {
  const role = useSelector(({ auth }) => auth.role);

  useCookies();

  if (role === "teacher") {
    return <ProjectTeacher />;
  }
  return <ProjectStudent />;
}

export default withAuthSync(Project);
