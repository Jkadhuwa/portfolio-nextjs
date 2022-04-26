import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "@mocks/@fortawesome/fontAwesomeIcon";

import Homepage from "../index";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

const createWrapper = () => {
  return render(<Homepage />);
};

describe("Test Index component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Homepage Unit Tests", () => {
    it("Should render index correctly", () => {
      createWrapper();
    });

    it("should have correct heading", () => {
      createWrapper();
      expect(
        screen.getByText(/MY EXPERTISE/i)
      ).toBeInTheDocument();
    });
  });
});
