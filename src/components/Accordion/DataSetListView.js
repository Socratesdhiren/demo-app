import React from "react";

import styled from "styled-components";

export const WrapperDiv = styled.div`
 padding: 12px 8px;
`

const StyledList = styled.div`
width: auto;
height: 54px;
border: 1px solid #D2DAE5;
border-radius: 8px;
margin-bottom: 14px;
opacity: 1;
display: flex;
align-items: center;
justify-content: center;
`
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

  return <WrapperDiv>{dataSetList.map(data => <StyledList>{data?.title}</StyledList>)}</WrapperDiv>;
};

export default DataSetListView;
