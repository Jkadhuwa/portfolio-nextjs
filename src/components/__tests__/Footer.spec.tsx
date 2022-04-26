import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";

import Footer from "@components/layout/Footer";

afterEach(cleanup);
beforeAll(() => FontAwesomeIcon());
jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

const createWrapper = () => {
  return render(<Footer />);
};
describe("Test ExpertiseCard component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Footer Unit Tests", () => {
    it("Should render intro correctly", () => {
      createWrapper();
    });

    it("should have correct heading", () => {
      createWrapper();
      expect(screen.getByRole("heading")).toHaveTextContent(
        "Let's Collaborate!"
      );
    });
    it("should have correct heading", () => {
      createWrapper();
      expect(screen.getByTestId("dp")).toHaveAttribute(
        "src",
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    });
  });
});
