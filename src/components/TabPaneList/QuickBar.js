import React from "react";
import styled from "styled-components";
import {
  AndroidOutlined,
  AppleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Button, Space } from "antd";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 32px;
  border-bottom: 1px solid #dfe6f0;
`;

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <AndroidOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <AppleOutlined />,
  },
];

const RightWrapper = styled.div`
  display: flex;
  flex: 1 auto;
  justify-content: end;
`;

const SampleText = styled.span`
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
`;

const LeftWrapper = styled(RightWrapper)`
  justify-content: start;
  align-items: center;
  .ant-space-align-center {
    gap: 60px !important;
  }

  .ant-btn {
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #d2dae5;
  }
`;
const QuickBar = () => {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <MainWrapper>
      <LeftWrapper>
        <SampleText>Sample Data</SampleText>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Dropdown main
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </LeftWrapper>

      <RightWrapper>
        <AndroidOutlined />

        <AppleOutlined />
      </RightWrapper>
    </MainWrapper>
  );
};

export default QuickBar;
