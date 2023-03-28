import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  FaEye,
  FaRegListAlt,
  FaRegUser,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { RouteData} from "@/types";
import About from "./components/aboutPage/About";
import Services from "./components/servicePage/Services";
import Resume from "./components/resumePage/Resume";
import Blogs from "./components/blogsPage/Blogs";
import Contact from "./components/contactPage/Contact";
import Portfolio from "./components/portfolioPage/Portfolio";

const routes: RouteData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "services",
    Icon: FaEye,
    Component: Services,
  },
  {
    id: 4,
    label: "Portfolio",
    Icon: BsFillBriefcaseFill,
    Component: Portfolio,
  },
  {
    id: 5,
    label: "blogs",
    Icon: MdDashboard,
    Component: Blogs,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
];


export default routes;