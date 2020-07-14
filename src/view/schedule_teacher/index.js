import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography, Row, Col } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import Table from "src/components/Table";
import FilterBar from "src/components/FilterBar";
import ScheduleTable from "src/components/ScheduleTable";

import * as Actions from "src/store/actions";

const { Content, Footer, Sider } = Layout;

const columns = [
  {
    title: "Mã Lớp",
    dataIndex: "classCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Mã HP",
    dataIndex: "moduleCode",
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
    title: "Loại hình",
    dataIndex: "type",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Hình thức giáo dục",
    dataIndex: "mean",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Hệ DT",
    dataIndex: "program",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Danh sách SV",
    dataIndex: "studentList",
    sorter: (a, b) => a.cv.length - b.cv.length,
    sortDirections: ["descend", "ascend"],
    render: (text) => {
      return {
        children: <a href={text}>52/80</a>,
      };
    },
  },
  {
    title: "Lớp",
    dataIndex: "class",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Lịch học",
    dataIndex: "schedule",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
];

function makeScheduleData(schedules) {
  const data = schedules.map((item, index) => {
    return {
      key: index,
      moduleCode: item.courseId,
      classCode: item.classId,
      type: item.classType,
      program: "",
      class: item.info,
      moduleName: item.name,
      studentList: `${item.studentNum}/${item.studentNumRange}`,
      mean: item.accessCode,
      schedule: item.calendars[0],
    };
  });
  return data;
}

export default function Schedule() {
  const dispatch = useDispatch();
  const schedules = useSelector(({ schedule_teacher }) =>
    Object.values(schedule_teacher.classes)
  );

  useEffect(() => {
    dispatch(Actions.fetchClasses());
  }, []);
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
      <div className="w-full pl-24 pr-24">
        <FilterBar />
        <Table dataSource={makeScheduleData(schedules)} columns={columns} />
      </div>
    </Layout>
  );
}
