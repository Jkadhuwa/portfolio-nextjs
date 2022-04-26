import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import FontAwesomeIcon from "../../__mocks__/@fortawesome/fontAwesomeIcon";
import Navbar from "../layout/Navbar";

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
jest.mock(
  "next/link",
  () =>
    ({ children }: { children: JSX.Element }) =>
      children
);

const createWrapper = () => {
  return render(<Navbar />);
};
describe("Test Navbar component", () => {
  describe("Snapshot Tests", () => {
   it('should match snapshot', () => {
      const wrapper = createWrapper();

      expect(wrapper).toMatchSnapshot();
   })
  });

});
