import React from "react";
import styled from "styled-components";
import { Input, Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { SearchBox } from "../assets/svg_files";

const LeftWrapper = styled(Col)`
  align-items: center;
  span {
    font-size: 24px;
    letter-spacing: 0.38px;
    font-weight: 600;
  }
  .anticon-left {
    font-size: 16px;
    color: rgb(18, 118, 255);
    background: 0% 0% no-repeat padding-box padding-box rgb(234, 243, 255);
    border-radius: 8px;
    padding: 10px;
    opacity: 1;
    margin-right: 12px;
  }
`;

const HeaderSection = () => {
  return (
    <Row>
      <LeftWrapper xs={24} sm={24} md={12} lg={12} xl={12}>
        <LeftOutlined />
        <span>Sample data 1</span>
      </LeftWrapper>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Input placeholder="search datasets" prefix={<SearchBox />} />
      </Col>
    </Row>
  );
};

export default HeaderSection;
