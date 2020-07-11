import React, { useEffect, useState } from "react";
import { Layout, Typography, Input, Select } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import Table from "src/components/Table";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "src/store/actions";
const { Content, Footer, Sider } = Layout;
import "./style.less";

const { Option } = Select;
const { Text } = Typography;

const semester = [
  { label: "20161", value: 20161 },
  { label: "20162", value: 20162 },
  { label: "20163", value: 20163 },
  { label: "20171", value: 20171 },
  { label: "20172", value: 20172 },
  { label: "20173", value: 20173 },
  { label: "20181", value: 20181 },
  { label: "20182", value: 20182 },
  { label: "20183", value: 20183 },
  { label: "20191", value: 20191 },
  { label: "20192", value: 20192 },
  { label: "20193", value: 20193 },
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
        <div className="w-full p-4">
          <Text className="mr-4">Kỳ</Text>
          <Select defaultValue={20192} style={{ width: 100 }}>
            {semester.map((item) => {
              return (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
          <Input.Search
            className="ml-4"
            style={{ width: 300 }}
            placeholder="Nhập mã lớp, mã môn hoặc tên môn"
          />
        </div>
        <Table dataSource={makeProjectsData(projects)} />
      </div>
    </Layout>
  );
}
