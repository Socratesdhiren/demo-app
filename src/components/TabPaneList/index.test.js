import React from "react";
import { render, screen } from "@testing-library/react";

import Index from "./index";

describe("Index component", () => {
  it("Test includes renders the correct tab labels", () => {
    render(<Index />);
    expect(screen.getByText("Data Table 1")).toBeInTheDocument();
    expect(screen.getByText("Data Table 2")).toBeInTheDocument();
  });

  it("Test includes renders the correct default active tab", () => {
    render(<Index />);
    expect(screen.getByText("Content of Tab Pane 2")).toBeInTheDocument();
  });

  it("Test the onChange function when a tab is clicked", () => {
    const mockOnChange = jest.fn();
    render(<Index onChange={mockOnChange} />);
    const dataTable1Tab = screen.getByText("Data Table 1");
    dataTable1Tab.click();
    expect(mockOnChange).toHaveBeenCalledWith("1");
  });
});
