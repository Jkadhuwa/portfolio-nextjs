import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";

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
  describe("Snapshot Tests",() => {
    const wrapper =  createWrapper();

    expect(wrapper).toMatchSnapshot();

  });

  describe('Intro Unit Tests', () => {
     it("Should render intro correctly", () => {
       createWrapper();
     });

     it("should have correct heading", () => {
       createWrapper();
       expect(screen.getByRole("heading")).toHaveTextContent(
         "Building Solutions using Tech"
       );
     });
  })
 
});
