import React from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Collapse, Dropdown } from "antd";
import { WrapperDiv } from "./DataSetListView";
import styled from "styled-components";
import { NoSampleDataSVG } from "../../assets/svg_files";

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  background: #ffffff 0% 0% no-repeat padding-box;
  .ant-collapse-header {
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.22px;
    color: #1b2f50;
    .anticon {
      color: #1276ff !important;
    }
  }
  .ant-collapse-extra .anticon-plus {
    color: #1276ff;
    background: #eaf3ff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    padding: 6px;
    opacity: 1;
  }
  .ant-collapse-item {
    border-bottom: 1px solid #dfe6f0;
  }
`;

const text = `
  A dog is a type of domesticated animal.
`;

const StyledNoSampleData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.9;
  padding: 80px 40px;
  border-top: 1px solid #dfe6f0;
  color: #5e6c84;
`;
const items = [
  {
    type: "group",
    label: " Sample data ",
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
];

const SampleData = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <Dropdown
      menu={{
        items,
      }}
      overlayClassName="dropdown-options"
      placement="bottom"
    >
      <PlusOutlined
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
    </Dropdown>
  );
  return (
    <WrapperDiv>
      <StyledCollapse bordered={false} activeKey={["1"]} onChange={onChange}>
        <Panel header="Sample data" key="1" extra={genExtra()}>
          <StyledNoSampleData>
            <div>
              <NoSampleDataSVG />
            </div>
            <div>No sample data</div>
          </StyledNoSampleData>
        </Panel>
        <Panel header="Data set 2" key="2" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="Data set 3" key="3">
          <div>{text}</div>
        </Panel>
      </StyledCollapse>
    </WrapperDiv>
  );
};

export default SampleData;
