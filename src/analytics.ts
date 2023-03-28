import ReactGA from "react-ga";

export const initGA = (): void => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "");
};
export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
