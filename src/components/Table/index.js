import React, { useState } from "react";
import { Table } from "antd";
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

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    moduleCode: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default function CustomTable(props) {
  const { dataSource } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      className="w-full"
      size="small"
      scroll={{ x: "100%" }}
      dataSource={dataSource}
    />
  );
}
