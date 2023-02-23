import { IconType } from "react-icons";

export interface ProfileData {
  id: string;
  cv: {
    url: string;
  };
  name: string;
  avatar: { url: string };
  bgImage: { url: string }[];
}

export interface MenuData {
  id: number;
  label: string;
  Icon: IconType;
  Component: () => JSX.Element;
}

export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface SocialMedia {
  id: number;
  label: string;
  mediaUrl: string;
  logoColor: string;
  info: string;
  Icon: IconType;
}
export interface ServiceData {
  id: number;
  title: string;
  Icon: IconType;
  description: string;
}

export interface ExperienceData {
  id: string;
  badge: string;
  logo: {
    url: string;
  };
  logoAlt: string;
  desc: string;
  title: string;
  subTitle: string;
  experience: boolean;
  certificate: boolean;
  education: boolean;
}

export interface BlogData {
  id: string;
  blogUrl: string;
  description: string;
  title: string;
  thumbnail: { url: string };
  date: Date;
}

export interface BlogsQuery {
  blogs: BlogsData[];
}
