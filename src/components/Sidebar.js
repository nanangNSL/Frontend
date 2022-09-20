import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import "antd/dist/antd.min.css";
import "../Style/sidebar.css";
import Table from "./organism/Table";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import * as Type from "../redux/menu/type";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Home"
  },
  {
    key: "contact",
    icon: <ContactsOutlined />,
    label: "Contact"
  },
  {
    key: "about",
    icon: <UserOutlined />,
    label: "About"
  }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigation = (e) => {
    switch (e.key) {
      case "home":
        dispatch({
          type: Type.SET_HOME,
          payload: {
            home: true
          }
        });
        dispatch({
          type: Type.SET_ABOUT,
          payload: {
            about: false
          }
        });
        dispatch({
          type: Type.SET_CONTACT,
          payload: {
            contact: false
          }
        });

        break;
      case "about":
        dispatch({
          type: Type.SET_ABOUT,
          payload: {
            about: true
          }
        });
        dispatch({
          type: Type.SET_HOME,
          payload: {
            home: false
          }
        });
        dispatch({
          type: Type.SET_CONTACT,
          payload: {
            contact: false
          }
        });
        navigate("/about");
        break;
      case "contact":
        dispatch({
          type: Type.SET_CONTACT,
          payload: {
            contact: true
          }
        });
        dispatch({
          type: Type.SET_ABOUT,
          payload: {
            about: false
          }
        });
        dispatch({
          type: Type.SET_HOME,
          payload: {
            home: false
          }
        });
        navigate("/contact");
        break;

      default:
        break;
    }
  };

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo">
          <Title level={2}>Frontend</Title>
        </div>
        <Menu items={menuItems} theme="dark" onClick={handleNavigation} />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0"
          }}
          className="d-block"
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Table />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          Frontend ©2022 Created by Nanang komarudin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
