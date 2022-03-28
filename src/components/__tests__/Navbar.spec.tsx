import React from "react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";
import Navbar from "@components/layout/Navbar";

afterEach(cleanup);

beforeAll(() => FontAwesomeIcon());

jest.mock("../../public/logo.png", () => {
  return {
    default: { src: "/public/logo.png", height: 100, width: 100 },
  };
});

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
    };
  },
}));

const createWrapper = () => {
  return render(<Navbar />);
};
describe("Test Navbar component", () => {
  describe("Snapshot Tests", () => {
    const wrapper = createWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Navbar Unit Tests", () => {
    it("Should render navbar correctly", () => {
      createWrapper();
    });

    it("should have correct number of links", () => {
      createWrapper();
      expect(screen.getAllByRole("link").length).toEqual(11);
    });

    it("should change color when link is active", async () => {
      createWrapper();
      expect(await waitFor(() => screen.getAllByRole("link")[0])).toHaveAttribute('href', '/')
    });
  });
});
