import React from "react";
import {
  Button,
  Typography,
  Input,
  Select,
  Row,
  Col,
  Menu,
  Checkbox,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "src/components/Dropdown";
import { FilterFilled } from "@ant-design/icons";
import * as Actions from "src/store/actions";
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

const programs = {
  ThSKH: {
    checked: false,
  },
  VB2: {
    checked: false,
  },
  CNKT: {
    checked: false,
  },
  KSCQ: {
    checked: false,
  },
  SIE: {
    checked: false,
  },
  KSTN: {
    checked: false,
  },
  CTTT: {
    checked: false,
  },
  LATS: {
    checked: false,
  },
  KSCLC: {
    checked: false,
  },
  CNCN: {
    checked: false,
  },
  ThSKT: {
    checked: false,
  },
  TC: {
    checked: false,
  },
  HEDSPI: {
    checked: false,
  },
};
const classTypes = {
  LT: {
    checked: false,
  },
  BT: {
    checked: false,
  },
  TN: {
    checked: false,
  },
  TH: {
    checked: false,
  },
  DA: {
    checked: false,
  },
  DATN: {
    checked: false,
  },
  TT: {
    checked: false,
  },
  TTTN: {
    checked: false,
  },
  KLTN: {
    checked: false,
  },
  TTKT: {
    checked: false,
  },
  TTDN: {
    checked: false,
  },
  TTCN: {
    checked: false,
  },
};
const learningTypes = {
  Offline: {
    checked: false,
  },
  BLearning: {
    checked: false,
  },
  Online: {
    checked: false,
  },
};
const ABSemester = {
  AB: {
    checked: false,
  },
  A: {
    checked: false,
  },
  B: {
    checked: false,
  },
};
const status = {
  Mở: {
    checked: false,
  },
  "Yêu cầu mở": {
    checked: false,
  },
  Huỷ: {
    checked: false,
  },
};

export default function Filter() {
  const dispatch = useDispatch();
  const role = useSelector(({ auth }) => auth.role);
  const projects = useSelector(({ project_teacher }) =>
    Object.values(project_teacher.baseProjects)
  );

  function handleSearch(value) {
    if (value === "") {
      dispatch(Actions.setProjects(projects));
    } else {
      const searched = projects.filter((project) => project.classId === value);
      dispatch(Actions.setProjects(searched));
    }
  }

  return (
    <Row className="w-full p-4 flex items-center">
      {role === "teacher" ? (
        <Col >
          <Button
            type="primary"
            shape="round"
            icon={<FilterFilled />}
            size="large"
          >
            Bộ lọc
          </Button>
        </Col>
      ) : null}
      <Col >
        <div className="flex items-center">
          <Text className="pr-4">Kỳ</Text>
          <Select defaultValue={20192} style={{ width: 100 }}>
            {semester.map((item) => {
              return (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </div>
      </Col>
      {role === "teacher" ? (
        <React.Fragment>
          <Col>
            <Dropdown title="Chương trình" options={programs} />
          </Col>
          <Col>
            <Dropdown title="Loại lớp" options={classTypes} />
          </Col>
          <Col >
            <Dropdown title="Loại hình GD" options={learningTypes} />
          </Col>
          <Col >
            <Dropdown title="Học kỳ AB" options={ABSemester} />
          </Col>
          <Col>
            <Dropdown title="Trạng thái" options={status} />
          </Col>
        </React.Fragment>
      ) : null}

      <Col >
        <Input.Search
          className="ml-4"
          placeholder="Nhập mã lớp, mã môn hoặc tên môn"
          onSearch={handleSearch}
        />
      </Col>
    </Row>
  );
}
