import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskBox } from "./TaskBox";

describe("Make Sure Component works", () => {
  it("Render component with its children components", () => {
    render(<TaskBox />);
  });
});
