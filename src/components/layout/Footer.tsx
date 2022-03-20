import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from '@images/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col bg-slate-900  md:mx-32 md:px-36 py-12">
      <section className="md:grid md:grid-cols-2 gap-6">
        <div className="">
          <div className="flex justify-center h-20 w-20 rounded-full bg-gray-300 mb-12">
            <Image src={Profile} alt="profile_pic" className="rounded-full "/>
          </div>
          <div className="grid mb-12">
            <span className="text-gray-200 text-xl font-medium">
              Musinda Kadhuwa
            </span>
            <span className="text-slate-400 font-light text-sm">
              Software Engineer
            </span>
          </div>
          <div className="grid">
            <span className="text-slate-400 font-light text-sm">
              Email me at:
            </span>
            <span className="text-gray-200 text-xl font-medium">
              justinemsinda@gmail.com
            </span>
          </div>
        </div>
        <div className="">
          <div className="text-gray-200 text-4xl font-extrabold">
            <h1>Let&apos;s Collaborate!</h1>
          </div>
          <div className="flex flex-col text-gray-400 text-sm">
            <p className="leading-8">
              I am open to discussing personal and opensource projects,
              Let&apos;s create amazing products together
            </p>
            <div className="flex space-x-4 mt-12">
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8 rounded-full">
                <Link href="/contact">
                  <FontAwesomeIcon
                    icon={["fab", "dribbble"]}
                    className="w-4 cursor-pointer"
                  />
                </Link>
              </span>
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8 rounded-full">
                <Link href="https://www.linkedin.com/in/kadhuwa-musinda-a39346123/">
                  <a rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      className="w-4 cursor-pointer"
                    />
                  </a>
                </Link>
              </span>
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8  rounded-full">
                <Link href="/contact">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="w-4 cursor-pointer"
                  />
                </Link>
              </span>
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8  rounded-full">
                <Link href="/contact">
                  <FontAwesomeIcon
                    icon={["fab", "bitbucket"]}
                    className="w-4 cursor-pointer"
                  />
                </Link>
              </span>
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8  rounded-full">
                <Link href="/contact">
                  <FontAwesomeIcon
                    icon={["fab", "medium-m"]}
                    className="w-4 cursor-pointer "
                  />
                </Link>
              </span>
              <span className="flex items-center justify-center hover:bg-gray-600 h-8 w-8  rounded-full">
                <Link href="/contact">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="w-4 cursor-pointer "
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <span className="bg-gray-800 h-0.5  mt-12" />
      <section className="flex justify-between text-xs mt-12">
        <div className="text-gray-300 space-x-6 ">
          <span>
            <Link href="/">
              <a>About</a>
            </Link>
          </span>
          <span>
            <Link href="/portfolio">
              <a>Works</a>
            </Link>
          </span>
          <span>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </span>
          <span>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </span>
        </div>
        <div className="text-gray-600">
          &copy;{year} Musinda Kadhuwa - (Uninet, inc)
        </div>
      </section>
    </div>
  );
};

export default Footer;
