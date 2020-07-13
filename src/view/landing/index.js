import React from "react";
import { Layout } from "antd";
import Header from "src/components/Header";

// import "./style.less";

export default function Landing() {
  return (
    <Layout className="background-white">
      <Header />
      <div className="flex w-full">
        <picture>
          <source
            srcSet={require("images/hust-banner-landing.jpg?webp")}
            type="image/webp"
          />
          <source srcSet={require("images/hust-banner-landing.jpg")} type="image/jpeg" />
          <img
            className="w-full"
            src={require("images/hust-banner-landing.jpg?webp")}
          />
        </picture>
      </div>
    </Layout>
  );
}
