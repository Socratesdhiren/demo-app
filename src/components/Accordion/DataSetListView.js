import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import { HomeFilled } from "@ant-design/icons";

import { SearchBox, ThreeDotSVG } from "../../assets/svg_files";

export const WrapperDiv = styled.div`
  padding: 12px 8px 0 12px;
`;

const StyledSearch = styled(Input)`
  margin-bottom: 12px;
  background: #f5f6f9 0% 0% no-repeat padding-box;
  .ant-input {
    background: #f5f6f9 0% 0% no-repeat padding-box;
  }
`;

const StyledUI = styled.div`
  max-height: 180px;
  overflow-y: scroll;
`;

const dataSetList = [
  {
    title: "Dataset 1",
    records: "235 k",
  },
  {
    title: "Dataset 2",
    records: "235 k",
  },
  {
    title: "Dataset 3",
    records: "235 k",
  },
];

const ActiveDataSample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isactive }) => (isactive ? "#eaf3ff" : "#fff")} 0% 0%
    no-repeat padding-box;
  border: 1px solid ${({ isactive }) => (isactive ? "#1276ff" : "#d2dae5")};
  border-radius: 8px;
  opacity: 1;
  padding: 6px 12px;
  margin: 12px 12px 0;
`;

const SampleInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  .anticon {
    margin-right: 8px;
    margin-bottom: 16px;
    color: #1276ff;
  }
  color: ${({ isactive }) => (isactive ? "#1276ff" : "inherit")};

  [title~="heading"] {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    opacity: 1;
  }
  [title~="sub-heading"] {
    font-size: 12px;
    opacity: 1;
  }
`;

export const SampleDataView = ({ isActive, data }) => {
  return (
    <ActiveDataSample isactive={isActive} key={data?.title}>
      <SampleInfo isactive={isActive}>
        {isActive && <HomeFilled />}
        <div>
          <div title="heading">{data?.title}</div>
          <div title="sub-heading">{data?.records}</div>
        </div>
      </SampleInfo>
      <div>
        <ThreeDotSVG />
      </div>
    </ActiveDataSample>
  );
};

const DataSetListView = () => {
  return (
    <WrapperDiv>
      <StyledSearch placeholder="Search " prefix={<SearchBox />} />
      <StyledUI>
        {dataSetList.map((data) => (
          <SampleDataView key={data?.title} data={data} />
        ))}
      </StyledUI>
    </WrapperDiv>
  );
};

export default DataSetListView;
