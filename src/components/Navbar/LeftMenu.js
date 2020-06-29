import React, { Component } from "react";
import { Menu, Icon, Tooltip } from "antd";
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

        <Menu.Item className="nav-item" key="mail">
          <Tooltip placement="top" title="Tra cứu thông tin về lớp: Thời khóa biểu, giảng viên, trạng thái,...">
            <a href="">LỊCH HỌC</a>
          </Tooltip>
        </Menu.Item>
        <Menu.Item className="nav-item" key="alipay">
          <Tooltip placement="top" title="Đăng kí online các biếu mẫu của Viện">
            <a href="">BIỂU MẪU</a>
          </Tooltip>
        </Menu.Item>
        <Menu.Item className="nav-item" key="Hỏi đáp">
          <Tooltip placement="top" title="Tra cứu thông tin Hướng dẫn sử dụng, các câu hỏi thường gặp,...">
            <a href="">HỎI ĐÁP</a>
          </Tooltip>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
