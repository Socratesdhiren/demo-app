import React from "react";
import { Layout } from "antd";
import "../styles/main.css";

import HeaderSection from "./HeaderSection";
import Dashboard from "./Dashboard";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <HeaderSection />
      </Header>
      <Content>
        <Dashboard />
      </Content>
    </Layout>
  );
}

export default App;
