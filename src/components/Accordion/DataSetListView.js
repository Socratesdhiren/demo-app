import React from "react";
import styled from "styled-components";
import { Input } from "antd";

import { ThreeDotSVG, SearchBox } from "../../assets/svg_files";

export const WrapperDiv = styled.div`
  padding: 12px 8px 0 12px;
`;

const StyledSearch = styled(Input)`
margin-bottom: 12px;
background: #F5F6F9 0% 0% no-repeat padding-box;
.ant-input{
  background: #F5F6F9 0% 0% no-repeat padding-box;
}
`

const StyledUI = styled.div`
max-height: 180px;
overflow-y: scroll;
`

const StyledList = styled.div`
  width: auto;
  height: 54px;
  border: 1px solid #d2dae5;
  border-radius: 8px;
  margin-bottom: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
const DataSetListView = () => {
  return (
    <WrapperDiv>
      <StyledSearch placeholder="Search " prefix={<SearchBox />} />
      <StyledUI>
      {dataSetList.map((data) => (
        <StyledList>{data?.title}</StyledList>
      ))}

      </StyledUI>
     
    </WrapperDiv>
  );
};

export default DataSetListView;
