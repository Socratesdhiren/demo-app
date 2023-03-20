import React from "react";
import { Table, Slider } from "antd";
import styled from "styled-components";
import { FontColorsOutlined } from "@ant-design/icons";

import { HashIcon, KeyIcon } from "../../assets/svg_files";
import { SecondTable } from "../../constants/CommonUtils";

const TableWrap = styled(Table)`
  .ant-table-container {
    border: 1px solid #d2dae5;
    border-radius: 6px;
  }
  .ant-table-thead {
    .ant-table-cell {
      background: #fff !important;
      letter-spacing: 0px;
      color: #8d9cb5;
      opacity: 1;
    }
  }
  .ant-table-thead .ant-table-cell {
    border-radius: 0;
  }
  .ant-table-cell: before {
    display: none;
  }
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
`;

const StyledDescription = styled(StyledColumn)`
  .ant-slider {
    margin: 0;
    width: 70%;
  }
  .ant-slider-handle {
    display: none;
`;

const StyledColumnName = styled.div`
  font-size: 14px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  letter-spacing: 0.22px;
  color: #1b2f50;
  font-weight: 600;
  border-radius: 4px;
  background: ${({ recordName }) =>
    recordName === "Geo ID" || recordName === ""
      ? "#EAF3FF 0% 0% no-repeat padding-box"
      : ""};
`;

const StyledDataType = styled.div`
  display: flex;
  line-height: normal;
  align-items: center;
  color: #8d9cb5;
  .ant-icon.anticon-font-colors {
    margin-top: 2px;
    font-size: 12px;
  }
  svg {
    margin-right: 6px;
  }
`;

const columns = [
  {
    title: "Column Name",
    dataIndex: "name",
    width: 150,
    render: (text, record) => (
      <StyledColumn>
        <StyledColumnName recordName={record?.name}>
          {record?.name === "Geo ID" && <KeyIcon />}
          {record?.name}
        </StyledColumnName>
        <StyledDataType>
          {record?.dataType === "integer" && <HashIcon />}
          {record?.dataType !== "integer" && <FontColorsOutlined />}
          {record?.dataType}
        </StyledDataType>
      </StyledColumn>
    ),
  },
  {
    title: "Description",
    dataIndex: "money",
    align: "left",
    render: (_, record) => (
      <StyledDescription>
        <div>{record?.address}</div>
        <div>{record?.money}</div>
        <Slider value={record?.money} />
      </StyledDescription>
    ),
  },
];

const ColumnDetail = () => {
  return (
    <TableWrap
      columns={columns}
      dataSource={SecondTable}
      pagination={false}
      scroll={{
        y: 400,
      }}
    />
  );
};

export default ColumnDetail;
