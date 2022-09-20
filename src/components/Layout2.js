import { Breadcrumb, Image, Layout, Typography, Space, Col } from "antd";
import React from "react";
const { Header, Content, Footer } = Layout;

const Layout2 = () => (
  <Layout>
    <Header
      style={{
        zIndex: 1,
        width: "100%",
        position: "fixed"
      }}
    >
      <Typography.Title
        style={{
          margin: "4px",
          fontWeight: "bold",
          color: "white"
        }}
      >
        Contact.
      </Typography.Title>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0"
        }}
      >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: "80vh"
        }}
      >
        <Space>
          <Image src="https://craftwork.design/wp-content/uploads/edd/2022/08/WorkonLaptop.png" />
          <Col>
            <Typography.Title>Still in development stage</Typography.Title>
            <Typography>📧nanangkomarudin2015@gmail.com</Typography>
            <Typography>📞 081212737047</Typography>
          </Col>
        </Space>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center"
      }}
    >
      Frontend©2022 Created by Nanang Komarudin
    </Footer>
  </Layout>
);

export default Layout2;
