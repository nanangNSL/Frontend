import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const BreadCrumb = () => (
  <Breadcrumb style={{ margin: "2%", fontSize: "15px !important" }}>
    <Breadcrumb.Item href="/">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <span>Detail</span>
    </Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadCrumb;
