import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
const { Content, Footer, Sider } = Layout;
import "./style.less";

export default function Home() {
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
    </Layout>
  );
}
