import React, { useState, useEffect } from "react";
import { Button, Menu, Dropdown, Checkbox } from "antd";

export default function Dropdownz(props) {
  const { options, title } = props;
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState(options);

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
