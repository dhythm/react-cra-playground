import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Main } from "./Main";

jest.mock("@assets", () => ({
  ...jest.requireActual<any>("@assets"),
}));

describe("test for Main", () => {
  it("should be shown", async () => {
    render(<Main />);
    expect(
      screen.getByText('{"foo":"foo","bar":"bar","baz":"baz","qux":"qux"}')
    );
  });
});
