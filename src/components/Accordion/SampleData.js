import React from "react";

import { SettingOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { WrapperDiv } from "./DataSetListView";
import styled from "styled-components";

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  background: #ffffff 0% 0% no-repeat padding-box;
  .ant-collapse-header {
    padding: 12px;
  }
`;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const SampleData = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );
  return (
    <WrapperDiv>
      <StyledCollapse
        bordered={false}
        defaultActiveKey={["1"]}
        onChange={onChange}
      >
        <Panel header="This is panel header 1" key="1" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" key="2" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" key="3" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
      </StyledCollapse>
    </WrapperDiv>
  );
};

export default SampleData;
