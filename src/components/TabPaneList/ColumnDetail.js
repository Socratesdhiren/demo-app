import React from "react";
import { Table, Slider } from "antd";
import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  .ant-slider {
    margin: 0;
    width: 70%;
  }
  .ant-slider-handle {
    display: none;
`;
const columns = [
  {
    title: "Column Name",
    dataIndex: "name",
    width: 150,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "money",
    align: "left",
    render: (_, record) => (
      <StyledDescription>
        {console.log(record, "record")}
        <div>{record?.address}</div>
        <div>{record?.money}</div>
        <Slider value={record?.money} />
      </StyledDescription>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: 70,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: 100,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: 60,
    address: "Sydney No. 1 Lake Park",
  },
];
const ColumnDetail = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ["none"],
      }}
    />
  );
};

export default ColumnDetail;
