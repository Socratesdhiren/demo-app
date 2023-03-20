import { render, screen } from "@testing-library/react";
import DataSetListView from "./DataSetListView";

describe("WrapperDiv", () => {
  test("renders search input and dataset list", () => {
    render(<DataSetListView />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});
