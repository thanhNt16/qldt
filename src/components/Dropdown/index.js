import React, { useState, useEffect } from "react";
import { Button, Menu, Dropdown, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "src/store/actions";

export default function Dropdownz(props) {
  const dispatch = useDispatch();
  const { options, title } = props;
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState(options);
  const checkOption = useSelector(
    ({ project_teacher }) => project_teacher.checkOptions
  );

  const renderMenu = (
    <Menu>
      <Menu.Item className="border-b-2 pt-8 pb-8">
        <Checkbox
          checked={checkedAll}
          onChange={(e) => {
            setCheckedAll(e.target.checked);
            let checked = {
              ...checkedOptions,
            };
            for (var check in checked) {
              checked[check].checked = e.target.checked;
            }
            setCheckedOptions(checked);
          }}
        />{" "}
        Chọn tất cả
      </Menu.Item>
      {Object.keys(options).map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Checkbox
              checked={checkedOptions[item].checked}
              onChange={(e) =>
                setCheckedOptions({
                  ...checkedOptions,
                  [item]: { checked: e.target.checked },
                })
              }
            />{" "}
            {item}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={renderMenu} placement="bottomLeft" arrow>
      <Button>{title}</Button>
    </Dropdown>
  );
}
