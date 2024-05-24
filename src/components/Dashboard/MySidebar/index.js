"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileOutlined,
  HomeOutlined,
  LayoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ApartmentOutlined,
  ToolOutlined,
  InboxOutlined, 
  ShoppingOutlined,
  ProductOutlined,
  ArrowUpOutlined,
  SlidersOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content, Footer } = Layout;

const MySidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, href, children) {
    return {
      key,
      icon,
      label: href ? <Link href={href}>{label}</Link> : label,
      children,
    };
  }

  const items = [
    getItem("dashboard", "1", <PieChartOutlined />, "/dashboard"),
    getItem("Building", "2", <LayoutOutlined />, "/master/building"),
    getItem("Warehouse", "3", <HomeOutlined />, "/master/warehouse"),
    getItem("Sample Storage Location", "4", <FileOutlined />, "/master/samplestoragelocation"),
    getItem("Storage Location", "5", <FileOutlined />, "/master/storagelocation"),
    getItem("Vendor", "6", <FileOutlined />, "/master/vendor"),
    getItem("Department", "7", <ApartmentOutlined />, "/master/department"),
    getItem("Equipment Type", "8", <ToolOutlined />, "/master/equipmenttype"),
    getItem("Packing Type", "9", <InboxOutlined />, "/master/packingtype"),
    getItem("Product Category", "10", <ShoppingOutlined />, "/master/productcategory"),
    getItem("Product Type", "11", <ProductOutlined />, "/master/producttype"),
    getItem("Other Expense", "12", <ArrowUpOutlined />, "/master/otherexpense"),
    getItem("Parameter Category", "13", <SlidersOutlined />, "/master/parametercategory"),
    // getItem("User", "sub1", <UserOutlined />, null, [
    //   getItem("Tom", "3", null, "/user/tom"),
    //   getItem("Bill", "4", null, "/user/bill"),
    //   getItem("Alex", "5", null, "/user/alex"),
    // ]),
    // getItem("Team", "sub2", <TeamOutlined />, null, [
    //   getItem("Team 1", "6", null, "/team/team1"),
    //   getItem("Team 2", "8", null, "/team/team2"),
    // ]),
    // getItem("Files", "9", <FileOutlined />, "/files"),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: "margin-left 0.2s",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            flex: 1,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MySidebar;
