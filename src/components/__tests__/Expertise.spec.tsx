import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";


import Expertise from "../Expertise";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

describe("Expertise Tests", () => {
  const createWrapper = () => {
    return render(<Expertise />);
  };

  it("Should match snapshot", () => {
     const {container} =  createWrapper();

     expect(container).toMatchSnapshot()
  });
});
