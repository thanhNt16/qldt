import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { encryptorPass } from "src/services/user.services";
import * as Actions from "src/store/actions";

import "./style.less";

const { Title } = Typography;

export default function SignIn() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log("encoded", encryptorPass("20163727", "h"));
    dispatch(Actions.loginRequest({ ...values }));
  };
  return (
    <div className="flex w-full h-screen wrap">
      <div className="left image-container">
        <picture>
          <source srcSet={require("images/cover.jpg?webp")} type="image/webp" />
          <source srcSet={require("images/cover.jpg")} type="image/jpeg" />
          <img
            className="w-full h-full"
            src={require("images/cover.jpg?webp")}
          />
        </picture>
      </div>
      <div className="right">
        <div className="flex w-full items-center pr-12 pl-12">
          <picture>
            <source
              srcSet={require("images/logo.jpg?webp")}
              type="image/webp"
            />
            <source srcSet={require("images/logo.jpg")} type="image/jpeg" />
            <img
              className="mr-6"
              style={{ width: 55, height: 81 }}
              src={require("images/logo.jpg?webp")}
            />
          </picture>
          <div>
            <p className="font-bold">
              HỆ THỐNG QUẢN LÝ GIẢNG DẠY, ĐỒ ÁN VÀ DỊCH VỤ TRỰC TUYẾN
            </p>
            <p>TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI</p>
          </div>
        </div>
        <Title className="mt-6 ml-auto mr-auto">Đăng nhập</Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Xin hãy nhập tên đăng nhập!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Xin hãy nhập mật khẩu!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ mật khẩu</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Quên mật khẩu
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
