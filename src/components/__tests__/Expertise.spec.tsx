import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "@mocks/@fortawesome/fontAwesomeIcon";
import Expertise from "@components/Expertise";
import expertise, { IExpertise } from "../../database/expertise";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});


// jest.mock("../../database/expertise.ts", () => {
//   return {
//     expertise,
//   };
// });

const createWrapper = () => {
  return render(<Expertise />);
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

    // it("should have correct heading", () => {
    //   createWrapper();
    //   expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
    //     "Building Solutions using Tech"
    //   );
    // });
  });
});
