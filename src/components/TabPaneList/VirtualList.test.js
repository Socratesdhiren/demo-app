import React from "react";
import { render } from "@testing-library/react";
import VirtualList from "./VirtualList";

describe("TableList component", () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 200,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  it("renders table with columns and data", () => {
    const { getByText } = render(<VirtualList columns={columns} data={data} />);

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Age")).toBeInTheDocument();
    expect(getByText("Address")).toBeInTheDocument();

    expect(getByText("John Brown")).toBeInTheDocument();
    expect(getByText("Jim Green")).toBeInTheDocument();
    expect(getByText("Joe Black")).toBeInTheDocument();
  });
});
