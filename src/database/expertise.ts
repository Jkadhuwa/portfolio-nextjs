export interface IExpertise {
  iconPrefix: string;
  iconName: string;
  title: string;
  desc: string;
  color?: string;
}

const expertise: IExpertise[] = [
  {
    iconPrefix: "fas",
    iconName: "pen-nib",
    color: "#86C7DC",
    title: "UI/UX Design",
    desc: "Design Websites and web-Applications and other desing related tasks. ",
  },
  {
    iconPrefix: "fas",
    iconName: "laptop-code",
    color: "#5E3AEE",
    title: "Frontend Development",
    desc: "Develop web-applications based on given/created UI designs using ReactJs, Angular ",
  },
  {
    iconPrefix: "fas",
    iconName: "code",
    color: "#B59B79",
    title: "API/Backend Development",
    desc: "Develop application backends usind Nodejs, Springboot or PHP",
  },
  {
    iconPrefix: "fas",
    iconName: "cogs",
    color: "#3AE7B3",
    title: "QA and DevOps",
    desc: "Testing exisiting code and fix bugs and also introduce automatic deployments.",
  },
];

export default expertise;
