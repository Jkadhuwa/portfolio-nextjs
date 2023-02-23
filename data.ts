import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
  FaTwitter,
  FaMobileAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";
import { SiFigma, SiFirebase, SiFiverr, SiNextdotjs, SiNodedotjs, SiAzuredevops } from "react-icons/si";
import { IoBugSharp } from "react-icons/io5";
import { MenuData, SocialMedia, ServiceData } from "@/types";
import { About } from "@components";
import Services from "./src/components/servicePage/Services";
import Resume from './src/components/resumePage/Resume';
import Blogs from './src/components/blogsPage/Blogs';

export const menus: MenuData[] = [
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
    Icon: FaEye,
    Component: About,
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
    Component: About,
  },
];
export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaDev,
    label: "Dev",
    logoColor: "black",
    mediaUrl: "https://dev.to/jkadhuwa",
    info: "Follow me and read my articles on Dev.to",
  },
  {
    id: 2,
    Icon: FaTwitter,
    label: "Twitter",
    logoColor: "#3b5998",
    mediaUrl: "https://twitter.com/jkadhuwa",
    info: "Follow me on Twitter",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/Jkadhuwa",
    info: "Star my projects on Github",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/kadhuwa-musinda-a39346123/",
    info: "Let's connect on Linkedin",
  },
  {
    id: 5,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's chat on Discord. My username -",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: ImDisplay,
    description: "Modern and Responsive website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: BsCodeSlash,
    description: "Performant Back-end with a NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    Icon: FaMobileAlt,
    description: "Modern user Interface trends with a highly professional and unique design.",
  },
  {
    id: 4,
    title: "DevOps",
    Icon: SiAzuredevops,
    description: "Manage all operations of ",
  },
  {
    id: 5,
    title: "Q & A",
    Icon: IoBugSharp,
    description: "Fully test apps to ensure it meets the required user specifications and industry standards",
  },
];
