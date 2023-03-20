import React from "react";
import styled from "styled-components";
import { Row, Col, Checkbox } from "antd";
import QuickBar from "./QuickBar";
import TotalRecords from "./TotalRecords";
import ColumnDetail from "./ColumnDetail";
import TableList from "./VirtualList";
import { HashIcon } from "../../assets/svg_files";

import { InfoCircleOutlined, FontColorsOutlined } from "@ant-design/icons";
import { CheckboxPlainOptions } from "../../constants/variable";
import { VirtualListData } from "../../constants/CommonUtils";

const TableDetailWrapper = styled.div`
  padding: 14px 24px 16px 14px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .ant-checkbox-wrapper {
    border: 1px solid #d2dae5;
    padding: 4px 8px;
    width: 117px;
    border-radius: 4px;
    opacity: 1;
  }
  .ant-checkbox .ant-checkbox-inner {
    border-radius: 11px;
  }
`;

const TitleWrapper = styled.div`
  background: #f3f4f8 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #1b2f50;
  font-weight: bold;
  font-size: 18px;
`;

const ColumnTitile = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  svg {
    margin: 0 4px;
    color: #8d9cb5;
  }
`;

const DataTable = () => {
  const columns = [
    {
      title: (_) => (
        <ColumnTitile>
          {<HashIcon />} geo_id {<InfoCircleOutlined />}
        </ColumnTitile>
      ),
      dataIndex: "name",
    },

    {
      title: (_) => (
        <ColumnTitile>
          {<FontColorsOutlined />} location {<InfoCircleOutlined />}
        </ColumnTitile>
      ),
      dataIndex: "location",
      render: (text) => <div>{text || "-"}</div>,
    },
    {
      title: (_) => (
        <ColumnTitile>
          {<HashIcon />} contact_no {<InfoCircleOutlined />}
        </ColumnTitile>
      ),
      dataIndex: "contact_no",
    },
  ];

  const onChange = (checkedValues) => {
    //console.log("checked = ", checkedValues);
  };

  return (
    <>
      <TitleWrapper>US Starbucks locations</TitleWrapper>
      <QuickBar />
      <TableDetailWrapper>
        <CheckboxWrapper>
          <Checkbox.Group
            options={CheckboxPlainOptions}
            defaultValue={["Option 3"]}
            onChange={onChange}
            defaultChecked
          />
        </CheckboxWrapper>

        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TableList columns={columns} data={VirtualListData} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TotalRecords />
            <ColumnDetail />
          </Col>
        </Row>
      </TableDetailWrapper>
    </>
  );
};

export default DataTable;
