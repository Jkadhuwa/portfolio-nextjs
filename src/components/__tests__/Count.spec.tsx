import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";

import Counts from "@components/Counts";

afterEach(cleanup);
beforeAll(() => FontAwesomeIcon());
jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});


const createWrapper = () => {
  return render(<Counts />);
};
describe("Test Count component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Count Unit Tests", () => {
    it("Should render count Component correctly", () => {
      createWrapper();
    });

    it("should have project count section", () => {
      createWrapper();
     expect(screen.getByText(/PROJECTS FINISHED/i)).toBeInTheDocument();
    });
      it("should have certifivcation count section", () => {
        createWrapper();
        expect(screen.getByText(/CERTIFICATIONS/i)).toBeInTheDocument();
      });
  });
});
