import React, { useState } from "react";
import { Table } from "antd";

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
    },
    {
        title: "Feedback",
        dataIndex: "feedback",
        sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Vào lớp",
        dataIndex: "joinClass",
        sorter: (a, b) => a.moduleCode.length - b.moduleCode.length,
        sortDirections: ["descend", "ascend"],
    },
];

export default function CustomTable(props) {
    // const { dataSource } = props;
    const dataSource = [
        {
            key: '1',
            moduleCode: '11397',
            classCode: 'IT5120E',
            moduleName: "Graduation Research",
            classType: "LT + BT",
            educationType: "Online",
            grade: "10",
            schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
            teacher: "HTTT - Đào Thành Chung chung.daothanh@hust.edu.vn",
        },
        {
            key: '2',
            moduleCode: '11397',
            classCode: 'IT5120E',
            moduleName: "Operating System",
            classType: "LT + BT",
            educationType: "Online",
            grade: "8",
            schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
            teacher: "HTTT - Đào Thành Chung chung.daothanh@hust.edu.vn",
        },
        {
            key: '3',
            moduleCode: '11397',
            classCode: 'IT5120E',
            moduleName: "Math III",
            classType: "LT + BT",
            educationType: "Online",
            grade: "7",
            schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
            teacher: "HTTT - Đào Thành Chung chung.daothanh@hust.edu.vn",
        },
        {
            key: '4',
            moduleCode: '11397',
            classCode: 'IT5120E',
            moduleName: "Computer Vision",
            classType: "LT + BT",
            educationType: "Online",
            grade: "5",
            schedule: "Sáng T3, Tiết 3-6, B1-402, Tuần:28-35,37-44, Kỳ AB",
            teacher: "HTTT - Đào Thành Chung chung.daothanh@hust.edu.vn",
        },
    ];
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
            dataSource={dataSource}
        />
    );
}
