import React, { useState } from "react";
import { Button, Table } from "antd";
import styled from "styled-components";
import { Row, Col, Checkbox } from "antd";
import QuickBar from "./QuickBar";
import TotalRecords from "./TotalRecords";
import ColumnDetail from "./ColumnDetail";

const TableDetailWrapper = styled.div`
  padding: 14px 24px 16px 14px;
`;
const plainOptions = ["Table", "Schema", "Option 3"];

const TableWrap = styled(Table)`
  height: 479px;
  .ant-table-thead {
    background: #eff0f5 0% 0% no-repeat padding-box;
  }
  .ant-table-thead .ant-table-cell {
    background: inherit;
    border-radius: 0;
    border-start-end-radius: 0 !important;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .ant-checkbox-wrapper {
    border: 1px solid #d2dae5;
    padding: 2px 7px;
    width: 117px;
    border-radius: 4px;
    opacity: 1;
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

const ActionWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  a.ant-btn {
    padding: 8px !important;
  }
`;

const CircleButton = styled(Button)`
  margin-left: ${({ hasedit }) => (hasedit ? "4px" : "")}}
  color: #5d97ff;
  text-align: center;
  border-color: #dee8ff;
  height: 24px;
  width: 24px;
`;

const ActionCircleButton = styled(CircleButton)`
  height: 41px;
  width: 42px;
`;

const DataTable = () => {
  const [dataLists, setDataLists] = useState([]);

  // const { searchValue } = useTableList();

  // const debouncedSearchValue = useDebounce(searchValue, 500);

  const columns = [
    {
      title: "geo_id",
      dataIndex: "name",
      render: (_, record) => <div>{}</div>,
    },

    {
      title: "location",
      dataIndex: "role",
      render: (text) => <div>{text || "-"}</div>,
    },
    {
      title: "contact_no",
      dataIndex: "apiKey",
      // width: 200,
    },
  ];

  //   useEffect(() => {
  //     dataLists?.length && setDataLists(dataLists);
  //   }, [dataLists]);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <>
      <TitleWrapper>US Starbucks locations</TitleWrapper>
      <QuickBar />
      <TableDetailWrapper>
        <CheckboxWrapper>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
        </CheckboxWrapper>

        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TableWrap
              showSorterTooltip={false}
              columns={columns}
              dataSource={dataLists || []}
              pagination={false}
              rowKey={(record) => record?._id}
            />
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
