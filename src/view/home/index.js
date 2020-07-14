import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography, Row, Col } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import Table from "src/components/Table";
import FilterBar from "src/components/FilterBar";

import * as Actions from "src/store/actions";

const { Content, Footer, Sider } = Layout;
import "./style.less";

function makeProjectsData(projects) {
  const data = projects.map((item, index) => {
    return {
      key: index,
      moduleCode: item.courseId,
      classCode: item.classId,
      studentCode: item.studentId,
      studentName: item.studentName,
      cv: item.student.cvUrl,
      program: "",
      moduleName: item.projectName,
      teacher: item.teacherName,
      report: "N/A",
    };
  });
  return data;
}

export default function Home() {
  const dispatch = useDispatch();
  const projects = useSelector(({ home }) => Object.values(home.projects));

  useEffect(() => {
    dispatch(Actions.fetchProjects());
  }, []);
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
      <div className="w-full pl-24 pr-24">
        <FilterBar />
        <Table dataSource={makeProjectsData(projects)} />
      </div>
    </Layout>
  );
}
