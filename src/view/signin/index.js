import React from "react";
import { Card, Button, Row } from "antd";

import "./style.less";

export default function SignIn() {
  return (
    <div className="flex w-full h-screen container">
      <div className="left">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/90105217_3028343507217811_7952898510012022784_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=kJOhJjOO48AAX-XpRoV&_nc_ht=scontent-xsp1-2.xx&oh=e895142c7d61c5de9e8361121cee6171&oe=5EB03D2E"
        />
      </div>
      <div className="right">Form</div>
    </div>
  );
}
