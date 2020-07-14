import React from "react";
import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import "./style.less";
import Router from "next/router";

export default function Header() {
  const isLoggedIn = useSelector(({ auth }) => !!auth.role);
  const goToLogin = () => {
    Router.push("/login");
  };

  return (
    <div className="h-auto bg-white w-11/12 m-auto pt-4 pb-4">
      <Row>
        <Col className="col" sm={24} md={15}>
          <picture>
            <source
              srcSet={require("images/logo.jpg?webp")}
              type="image/webp"
            />
            <source srcSet={require("images/logo.jpg")} type="image/jpeg" />
            <img
              style={{ height: 90, width: 60, display: "inherit" }}
              src={require("images/logo.jpg?webp")}
            />
          </picture>
          <div className="pl-3 pt-3 flex flex-col justify-end">
            <div className="upper-text">
              HỆ THỐNG QUẢN LÝ GIẢNG DẠY, ĐỒ ÁN VÀ DỊCH VỤ TRỰC TUYẾN
            </div>
            <div className="lower-text">
              TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI - VIỆN CÔNG NGHỆ THÔNG TIN VÀ
              TRUYỀN THÔNG
            </div>
          </div>
        </Col>

        <Col className="col flex-col justify-end" sm={24} md={9}>
          {isLoggedIn ? (
            <div>
              <div className="w-full flex justify-end mb-4 items-center">
                <picture>
                  <source
                    srcSet={require("images/Facebook.png?webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={require("images/Facebook.png")}
                    type="image/png"
                  />
                  <img
                    className="logo"
                    src={require("images/Facebook.png?webp")}
                  />
                </picture>
                <picture>
                  <source
                    srcSet={require("images/Google.png?webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={require("images/Google.png")}
                    type="image/png"
                  />
                  <img
                    className="logo"
                    src={require("images/Google.png?webp")}
                  />
                </picture>
                <picture>
                  <source
                    srcSet={require("images/default_avatar.jpg?webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={require("images/default_avatar.jpg")}
                    type="image/png"
                  />
                  <img
                    className="logo-big"
                    src={require("images/default_avatar.jpg?webp")}
                  />
                </picture>
              </div>
              <div className="w-full flex justify-end">
                Tuần 41 (Tuần học thứ 14):
                <div className="text-blue-400 inline"> 01/06 - 06/06</div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex justify-end items-center">
              <Button size={"large"} onClick={goToLogin}>Đăng nhập</Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
