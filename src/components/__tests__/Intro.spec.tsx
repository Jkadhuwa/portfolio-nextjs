import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "@mocks/@fortawesome/fontAwesomeIcon";
import Intro from "../Intro";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

const createWrapper = () => {
  return render(<Intro />);
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
      expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
        "Building Solutions using Tech"
      );
    });
  });
});
