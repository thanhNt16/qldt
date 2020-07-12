import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <SubMenu
          style={{
            background: "#444444",
            "&:hover": {
              color: "#fff !important",
            },
          }}
          title={<span>ĐỒ ÁN</span>}
        >
          <MenuItemGroup title="">
            <Menu.Item key="setting:1">DANH SÁCH ĐỒ ÁN</Menu.Item>
            <Menu.Item key="setting:2">ĐĂNG KÝ NGUYỆN VỌNG</Menu.Item>
            <Menu.Item key="setting:3">ĐỒ ÁN THAM KHẢO</Menu.Item>
            <Menu.Item key="setting:4">ĐỊNH HƯỚNG ĐỀ TÀI</Menu.Item>
            <Menu.Item key="setting:5">DS DOANH NGHIỆP</Menu.Item>
            <Menu.Item key="setting:6">KIỂM TRA ĐẠO VĂN</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="mail">
          <a href="">LỊCH HỌC</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="">BIỂU MẪU</a>
        </Menu.Item>
        <Menu.Item key="Hỏi đáp">
          <a href="">HỎI ĐÁP</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
