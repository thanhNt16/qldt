import React from "react";
import { Button, Typography, Input, Select, Row, Col } from "antd";

import { FilterFilled } from "@ant-design/icons";

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

export default function Filter() {
  return (
    <Row className="w-full p-4 flex items-center">
      <Col xs={12} md={2}>
        <Button
          type="primary"
          shape="round"
          icon={<FilterFilled />}
          size="large"
        >
          Bộ lọc
        </Button>
      </Col>
      <Col xs={12} md={2}>
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
      </Col>
      <Col xs={12} md={4}>
        <Input.Search
          className="ml-4"
          placeholder="Nhập mã lớp, mã môn hoặc tên môn"
        />
      </Col>
    </Row>
  );
}
