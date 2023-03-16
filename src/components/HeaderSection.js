import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSection = () => {
  return (
    <MainHeader>
      <div>Sample data 1</div>

      <SearchDiv>
        <Search placeholder="input search loading default" />
      </SearchDiv>
    </MainHeader>
  );
};

export default HeaderSection;
