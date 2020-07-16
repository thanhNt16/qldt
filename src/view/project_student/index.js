import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Row, Col, Descriptions } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import FilterBar from "src/components/FilterBar";
import Table from "src/components/Table";
import { ContainerOutlined, FormOutlined } from '@ant-design/icons';
import * as Actions from "src/store/actions";
import "./style.less";
const data = {
  name: "Bùi Việt Dũng",
  studentId: "20160637",
  program: "Chương trình tiên tiến",
  year: "61",
  email: "dung.bv160637@sis.hust.edu.vn",
  phone: "096942422",
  class: "ICT.02-K61",
  classManagement: "Trương Thị Diệu Linh"
};
const columns = [
  {
    title: "#",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Kỳ",
    dataIndex: "semester",
    sorter: (a, b) => a.key - b.key,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Mã lớp/HP",
    dataIndex: "classCode",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text, record) => {
      return {
        children:
          <div>
            <p>{text}</p>
            <p>{record.moduleCode}</p>
          </div>,
      };
    },
  },
  {
    title: "Tên học phần",
    dataIndex: "moduleName",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text) => {
      return {
        children: <a>{text}</a>,
      };
    },
  },
  {
    title: "Tên đề tài",
    dataIndex: "subjectName",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "GVHD",
    dataIndex: "teacher",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text, record) => {
      return {
        children:
          <div>
            <p>{text}</p>
            <p>{record.teacherEmail}</p>
            <p>{record.teacherPhone}</p>
          </div>,
      };
    },
  },
  {
    title: "Công ty",
    dataIndex: "company",
    sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
    sortDirections: ["descend", "ascend"],
    render: (text) => {
      return {
        children: <a>{text}</a>,
      };
    },
  },
];

const dataSource = [
  {
    key: "1",
    semester: "20192",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Graduation Research",
    subjectName: "Lập trình ứng dụng",
    teacher: "Nguyễn Thanh Hùng ",
    teacherEmail: "hung.nguyenthanh2@hust.edu.vn ",
    teacherPhone: "0938669118",
    company: null
  },
  {
    key: "2",
    semester: "20191",
    moduleCode: "11397",
    classCode: "IT5120E",
    moduleName: "Thực tập công nghiệp",
    subjectName: "Font-end Development with Angular 8",
    teacher: "",
    company: "FPT Software"
  },
];
export default function Project() {
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
      <div className="w-full pl-24 pr-24">
        <Row>
          <Col span={18}>
            <p className="title">Thông tin phân công các môn Đồ án</p>
            <Table columns={columns} dataSource={dataSource} />
          </Col>
          <Col span={6}>
            <Descriptions title={data.name + " - " + data.studentId}>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Hệ: </span>
                <a>{data.program}</a>
              </Descriptions.Item>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Khoá: </span>
                <a>{data.year}</a>
              </Descriptions.Item>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Email: </span>
                <a>{data.email}</a>
              </Descriptions.Item>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Điện thoại: </span>
                <a>{data.phone}</a>
              </Descriptions.Item>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Lớp: </span>
                <a>{data.class}</a>
              </Descriptions.Item>
              <Descriptions.Item span="3">
                <ContainerOutlined style={{ fontSize: '16px', color: '#08c' }} />
                <span className="label-des">Quản lý lớp: </span>
                <a>{data.classManagement}</a>
              </Descriptions.Item>
            </Descriptions>
            <FormOutlined style={{ paddingLeft: '16px', fontSize: '13px', color: '#08c' }} /><a>[Cập nhật thông tin]</a>
          </Col>
        </Row>

      </div>
    </Layout>
  );
}
