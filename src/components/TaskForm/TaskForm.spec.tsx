import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskForm } from "./TaskForm";

describe("Make Sure Component works", () => {
  it("Render component", () => {
    render(<TaskForm />);
  });

  it("Make sure inputs exist", () => {
    render(<TaskForm />);
    expect(screen.getAllByPlaceholderText("Task Name")).toBeTruthy();
    expect(screen.getAllByPlaceholderText("Task Description...")).toBeTruthy();
  });
});
