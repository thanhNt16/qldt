import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import FilterBar from "src/components/FilterBar";
import * as Actions from "src/store/actions";

export default function Project() {
  return (
    <Layout className="background-white">
      <Header />
      <Navbar />
      <div className="w-full pl-24 pr-24">
        <FilterBar />
      </div>
    </Layout>
  );
}
