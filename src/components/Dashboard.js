import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import Accordion from "./Accordion";
import TabPaneList from "./TabPaneList";

const MainRow = styled(Row)`
  min-height: calc(100vh - 88px);
  background: #ffffff 0% 0% no-repeat padding-box;
  .ant-col.accordion-on:first-child {
    border-right: 1px solid #d2dae5;
  }
`;

const Dashboard = () => {
  return (
    <MainRow>
      <Col xs={24} sm={24} md={12} lg={4} xl={4} className="accordion-on">
        <Accordion />
      </Col>
      <Col xs={24} sm={24} md={12} lg={20} xl={20}>
        <TabPaneList />
      </Col>
    </MainRow>
  );
};

export default Dashboard;
