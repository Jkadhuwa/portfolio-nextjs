import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";
import Layout from "@components/layout/Layout";

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
  return render(<Layout children />);
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
      expect(screen.getAllByRole("link").length).toEqual(21);
    });

    it("should have Software Engineer", () => {
      createWrapper();

      expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    });
  });
});
