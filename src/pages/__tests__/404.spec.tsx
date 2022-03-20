import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";


import NotFound from "../404";

afterEach(cleanup);

const createWrapper = () => {
  return render(<NotFound />);
};

describe("Test Intro component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Intro Unit Tests", () => {
    it("Should render intro correctly", () => {
      createWrapper();
    });

    it("should have correct heading", () => {
      createWrapper();
      expect(
        screen.getByText("Requested page could not be fetched!!")
      ).toBeInTheDocument();
    });
  });
});
