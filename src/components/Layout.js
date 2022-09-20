import { Breadcrumb, Layout, Typography, Space, Col, Image } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const App = () => (
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
        ABOUT.
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
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: "80vh"
        }}
      >
        <Space>
          <Image src="https://craftwork.design/wp-content/uploads/edd/2022/08/Chart.png" />
          <Col>
            <Typography.Title>About Me.</Typography.Title>

            <Typography.Paragraph style={{ width: "400px" }}>
              Ingin belajar dan meningkatkan keterampilan saya dengan bekerja
              lebih keras. Selain itu, memiliki ketertarikan dengan dunia
              teknologi informasi dan mulai belajar di Pijarcamp by Telkom
              sebagai full stack web developer yang didalamnya saya belajar :{" "}
              <Text mark>
                • Technical : Javascript, Node JS, Express JS, PostgreSQL,
                Restfull-API, React JS, Redux, Responsive Website, Next JS,
                React Native, Github Workflow, Agile SCRUM. • Softskill : Self,
                Growth Mindset, Public Speaking, Self Management, Time
                Management, Reflection Plan, Stress Management, Personal
                Branding.
              </Text>{" "}
              Harapannya saya bisa memenuhi kebutuhan industri saat ini dan
              kedepannya, selain itu menjadi pengembang website adalah cita-cita
              saya.
            </Typography.Paragraph>
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

export default App;
