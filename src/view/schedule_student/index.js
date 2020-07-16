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
    title: "Mã HP",
    dataIndex: "moduleCode",
    sorter: (a, b) => a.key - b.key,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Mã lớp",
    dataIndex: "classCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Tên học phần",
    dataIndex: "moduleName",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text) => {
      return {
        children: <a color='volcano'>{text}</a>,
      };
    },
  },
  {
    title: "Loại hình",
    dataIndex: "classType",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Hình thức GD",
    dataIndex: "educationType",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text, record) => {
      if (text === 'Offline') {
        return {
          children: <a style={{ color: 'black' }}>{text}</a>,
        };
      } else
        return {
          children: <div><p style={{ color: '#1890ff' }}>{text}</p><p>Code: <span style={{ fontWeight: 'bold' }}>{record.code}</span></p></div>,
        };
    },
  },
  {
    title: "Điểm",
    dataIndex: "grade",
    sorter: (a, b) => a.grade - b.grade,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Lịch học",
    dataIndex: "schedule",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Giảng viên",
    dataIndex: "teacher",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text, record) => {
      return {
        children: <div><p style={{ color: '#1890ff' }}>{text}</p><p style={{ color: 'blue' }}>{record.teacherEmail}</p></div>,
      };
    },
  },
  {
    title: "Feedback",
    dataIndex: "feedback",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: () => {
      return {
        children: <a>Feedback</a>,
      };
    },
  },
  {
    title: "Vào lớp",
    dataIndex: "joinClass",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: () => {
      return {
        children: <a>Vào lớp</a>,
      };
    },
  },
];

const dataSource = [
  {
    key: "1",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Graduation Research",
    classType: "LT + BT",
    code: "dhe45nj",
    educationType: "Offline",
    grade: "10",
    schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
    teacher: "HTTT - Đào Thành Chung",
    teacherEmail: "chung.daothanh@hust.edu.vn"
  },
  {
    key: "2",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Operating System",
    classType: "LT + BT",
    code: "dhe45nj",
    educationType: "Online",
    grade: "8",
    schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
    teacher: "HTTT - Đào Thành Chung",
    teacherEmail: "chung.daothanh@hust.edu.vn"
  },
  {
    key: "3",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Math III",
    classType: "LT + BT",
    code: "dhe45nj",
    educationType: "Online",
    grade: "7",
    schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
    teacher: "HTTT - Đào Thành Chung",
    teacherEmail: "chung.daothanh@hust.edu.vn"
  },
  {
    key: "4",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Computer Vision",
    classType: "LT + BT",
    code: "dhe45nj",
    educationType: "Online",
    grade: "5",
    schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
    teacher: "HTTT - Đào Thành Chung",
    teacherEmail: "chung.daothanh@hust.edu.vn"
  },
];

export default function Schedule() {
  const role = useSelector(({ auth }) => auth.role);
  const dispatch = useDispatch();
  // const projects = useSelector(({schedule}) => Object.values(schedule.projects));

  useEffect(() => {
    dispatch(Actions.fetchProjects());
  }, []);
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
      <div className="w-full pl-24 pr-24">
        {role === "teacher" ? <FilterBar /> : <FilterBar className='hidden-filter-btn' />}
        {/* <FilterBar /> */}
        {/* <Table dataSource={makeProjectsData(projects)} /> */}
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </Layout>
  );
}
