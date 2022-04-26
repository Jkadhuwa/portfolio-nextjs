import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "@mocks/@fortawesome/fontAwesomeIcon";
import AboutMe from "@components/AboutMe";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

const createWrapper = () => {
  return render(<AboutMe />);
};
describe("Test Intro component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("AboutMe Unit Tests", () => {
    it("Should render aboutme correctly", () => {
      createWrapper();
    });

    it("should have correct heading", () => {
      createWrapper();
      expect(screen.getByText(/A Bit More About Me/i)).toBeInTheDocument();
    });

    it("should have a single button with name More ...", () => {
      createWrapper();
       expect(screen.getByRole('button')).toHaveTextContent('More ...');
       expect(screen.getAllByRole("button").length).toBe(1);
    });
  });
});
