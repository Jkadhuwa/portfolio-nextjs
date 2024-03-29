import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaDev, FaDiscord, FaTwitter, FaMobileAlt } from "react-icons/fa";

import { BsCodeSlash } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";
import { SiAzuredevops } from "react-icons/si";
import { IoBugSharp } from "react-icons/io5";
import { SocialMedia, ServiceData } from "@/types";

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
    icon: ImDisplay,
    description: "Modern and Responsive website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Back-end",
    icon: BsCodeSlash,
    description: "Performant Back-end with a NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: FaMobileAlt,
    description: "Modern user Interface trends with a highly professional and unique design.",
  },
  {
    id: 4,
    title: "DevOps",
    icon: SiAzuredevops,
    description: "Manage all operations of ",
  },
  {
    id: 5,
    title: "Q & A",
    icon: IoBugSharp,
    description: "Fully test apps to ensure it meets the required user specifications and industry standards",
  },
];

export const ProjectData = {
  id: "01",
  projectUrl: "http://localhost:5000",
  thumbnail: { url: "https://media.graphassets.com/dJWpRggUQt2gJjsB06iw" },
  title: "Personal Portfolio",
  tags: ["Web design", "Development", " Illustrations"],
  client: "Violet Kerubo",
  about:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident libero exercitationem nesciunt et amet, veritatis soluta ullam alias tempora unde.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium pariatur, totam facere maxime ex ratione id nobis hic inventore, maiores dolore eos ducimus. Reiciendis quibusdam delectus incidunt velit aut, distinctio perferendis, eaque tenetur aperiam magnam libero pariatur eum doloremque maxime veritatis ipsam! Corporis cum nulla ipsa cumque quibusdam accusamus itaque, dolorum dignissimos necessitatibus assumenda?",
  images: [
    {
      url: "https://media.graphassets.com/dJWpRggUQt2gJjsB06iw",
    },
    {
      url: "https://media.graphassets.com/ixce2ExsTFS7UdqyqTzh",
    },
    {
      url: "https://media.graphassets.com/lRAvBYRTTcyJEZ5PQUnE",
    },
    {
      url: "https://media.graphassets.com/GAwT9TbRbWSNb7rhZvFQ",
    },
  ],
};
