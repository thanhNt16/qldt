import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
// import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import "./style.less";
class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menuBar">
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu mode="horizontal" />
          </div>

          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title=""
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="vertical" />
            {/* <RightMenu /> */}
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;
