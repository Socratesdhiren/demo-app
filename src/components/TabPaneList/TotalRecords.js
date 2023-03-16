import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  text-align: right;
  font: normal normal medium 14px/21px Manrope;
  letter-spacing: 0.2px;
  color: #5e6c84;
  opacity: 1;
  position: absolute;
  z-index: 1;
  top: -40px;
  right: 10px;
`;
const TotalRecords = () => {
  return <StyledText>180k records | 35 columns</StyledText>;
};

export default TotalRecords;
