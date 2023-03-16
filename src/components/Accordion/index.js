import React from "react";
import styled from "styled-components";
import { MoreOutlined, HomeFilled } from "@ant-design/icons";

import SampleData from "./SampleData";
import DataSetListView from "./DataSetListView";

const ActiveDataSample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eaf3ff 0% 0% no-repeat padding-box;
  border: 1px solid #1276ff;
  border-radius: 8px;
  opacity: 1;
  padding: 6px 12px;
  margin: 12px 12px 0;
`;

const SampleInfo = styled.div`
  display: flex;
  align-items: center;
  .anticon {
    margin-right: 8px;
    margin-bottom: 16px;
    color: #1276ff;
  }

  [title~="heading"] {
    color: #1276ff;
    font-size: 12px;
    line-height: 24px;
    opacity: 1;
  }
  [title~="sub-heading"] {
    color: #a2b2c7;
    font-size: 12px;
    opacity: 1;
  }
`;
const DataField = styled(SampleInfo)`
  line-height: normal;
`;
const index = () => {
  return (
    <>
      <ActiveDataSample>
        <SampleInfo>
          <HomeFilled />
          <div>
            <div title="heading">Sample Data 1</div>
            <div title="sub-heading">105k records</div>
          </div>
        </SampleInfo>
        <div>
          <MoreOutlined />
        </div>
      </ActiveDataSample>
      <SampleData />
      <DataSetListView />
    </>
  );
};

export default index;
