import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";

import ExpertiseCard from "@components/ExpertiseCard";

afterEach(cleanup);
beforeAll(() => FontAwesomeIcon());
jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

const title = "Test for expert card";
const desc = "Unit tests for the expert card";

const createWrapper = () => {
  return render(
    <ExpertiseCard iconName="cog" iconPrefix="fas" title={title} desc={desc} />
  );
};
describe("Test ExpertiseCard component", () => {
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
      expect(screen.getByText(/Test for expert card/i)).toBeInTheDocument();
    });
  });
});
