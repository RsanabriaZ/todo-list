import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskFilter } from "./TaskFilter";

describe("Make Sure Component works", () => {
  it("Render component", () => {
    render(<TaskFilter />);
  });

  it("Show Only text render", () => {
    render(<TaskFilter />);
    expect(screen.getByText("Show Only:")).toBeInTheDocument();
  });

  it("Tasks text render", () => {
    render(<TaskFilter />);
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });

  it("Render values", () => {
    render(<TaskFilter />);
    expect(screen.getByText("All")).toBeTruthy();
    expect(screen.getByText("Incomplete")).toBeTruthy();
    expect(screen.getByText("Complete")).toBeTruthy();
  });
});
