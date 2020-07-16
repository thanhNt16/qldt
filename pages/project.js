import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectTeacher from "src/view/project_teacher";
import ProjectStudent from "src/view/project_student";
import Head from "src/components/Head";

import useCookies from "src/hook/useCookie";

import { withAuthSync } from "src/utils/auth";

function Project() {
  const role = useSelector(({ auth }) => auth.role);

  useCookies();

  if (role === "teacher") {
    return (
      <React.Fragment>
        <Head title="Danh sách đồ án" />
        <ProjectTeacher />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Head title="Danh sách đồ án" />
      <ProjectStudent />
    </React.Fragment>
  );
}

export default withAuthSync(Project);
