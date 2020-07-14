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

const columns = [
  {
    title: "#",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Mã HP",
    dataIndex: "moduleCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Mã Lớp",
    dataIndex: "classCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "MSSV",
    dataIndex: "studentCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Họ tên",
    dataIndex: "studentName",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "CV",
    dataIndex: "cv",
    sorter: (a, b) => a.cv.length - b.cv.length,
    sortDirections: ["descend", "ascend"],
    render: (text) => {
      return {
        children: <a href={text}>CV</a>,
      };
    },
  },
  {
    title: "Hệ",
    dataIndex: "program",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Tên học phần",
    dataIndex: "moduleName",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "GVHD",
    dataIndex: "teacher",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Báo cáo",
    dataIndex: "report",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
];

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

export default function Project() {
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
        <Table columns={columns} dataSource={makeProjectsData(projects)} />
      </div>
    </Layout>
  );
}
