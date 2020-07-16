import React from "react";
import { Form, Input, Button, Checkbox, Typography, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Head from "src/components/Head";
import * as Actions from "src/store/actions";
import useCookie from "src/hook/useCookie";
import "./style.less";

const { Title } = Typography;

export default function SignIn() {
  const dispatch = useDispatch();
  useCookie();
  const error = useSelector(({ auth }) => auth.error);
  const onFinish = (values) => {
    dispatch(Actions.loginRequest({ ...values }));
  };

  return (
    <React.Fragment>
      <Head title="Đăng nhập" />
      <div className="flex w-full h-screen wrap">
        <div className="left image-container">
          <picture>
            <source
              srcSet={require("images/cover.jpg?webp")}
              type="image/webp"
            />
            <source srcSet={require("images/cover.jpg")} type="image/jpeg" />
            <img
              className="w-full h-full"
              src={require("images/cover.jpg?webp")}
            />
          </picture>
        </div>
        <div className="right">
          <Row className="flex w-full items-center pr-12 pl-12">
            <Col className="lg:h-full w-full" md={24} lg={4}>
              <picture className="h-full">
                <source
                  srcSet={require("images/logo.jpg?webp")}
                  type="image/webp"
                />
                <source srcSet={require("images/logo.jpg")} type="image/jpeg" />
                <img
                  className="w-1/2 my-2 lg:my-0 mx-auto lg:w-3/4"
                  src={require("images/logo.jpg?webp")}
                />
              </picture>
            </Col>
            <Col className="lg:h-full" md={24} lg={20}>
              <p className="font-bold">
                HỆ THỐNG QUẢN LÝ GIẢNG DẠY, ĐỒ ÁN VÀ DỊCH VỤ TRỰC TUYẾN
              </p>
              <p>TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI</p>
            </Col>{" "}
          </Row>
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
    </React.Fragment>
  );
}
