import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render HeaderSection and Dashboard components", () => {
    render(<App />);
    const headerSection = screen.getByRole("banner");
    const dashboard = screen.getByRole("main");
    expect(headerSection).toBeInTheDocument();
    expect(dashboard).toBeInTheDocument();
  });
});
