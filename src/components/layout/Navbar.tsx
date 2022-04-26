import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NextPage } from "next";


/**
 * Creates a navigation bar for the application
 *
 * @returns links to different pages
 */

const Navbar: NextPage = () => {
  const initial: string = "<MK/>";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  
  return (
    <header
      className={`${
        open
          ? "h-screen opacity-100 sticky top-0 overflow-hidden"
          : "h-20 items-center top-0 "
      } flex justify-between px-5 md:justify-between md:px-32  sticky  
     text-gray-500 bg-white z-50 opacity-100 animated shadow w-full md:h-20`}
    >
      <div
        className={`${
          open ? "mt-4" : ""
        } flex text-gray-800 h-12 w-12 rounded-full border items-center`}
      >
        <Link href="/">
          <a className="cursor-pointer">{initial}</a>
        </Link>
      </div>
      <div className="flex relative  md:hidden">
        <button
          className="text-gray-500 w-10 h-10 focus:outline-0 relative"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`block w-5  left-6 space-y-1.5 absolute transform  -translate-x-1/2 -translate-y-1/2 ${
              open ? "mt-4 -space-y-0.5" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block  h-0.5 w-7 bg-current transform transition duration-500 ease-in-out float-right ${
                open ? "rotate-45 " : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`inline-block  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out float-right ${
                open ? "hidden" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`inline-block  h-0.5 w-4 bg-current transform  transition duration-500 ease-in-out float-right ${
                open ? " -rotate-45  w-7" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`${
          open ? " absolute block mx-auto self-center left-0 right-0" : "hidden"
        }  md:flex`}
      >
        <nav
          className={`${
            open
              ? "flex flex-col text-2xl space-y-4 justify-center text-center font-light"
              : "flex"
          } md:space-x-8 text-inherit`}
        >
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              About
            </a>
          </Link>

          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/portfolio"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              Portfolio
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={
                router.pathname === "/resume"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              Resume
            </a>
          </Link>
          <Link href="/blogs">
            <a
              className={
                router.pathname === "/resume"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              Blogs
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname === "/resume"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              Contact
            </a>
          </Link>
        </nav>
      </div>
      <div className="hidden lg:flex lg:w-36 space-x-4 lg:items-center ">
        <span className="lg:w-12">
          <Link href="/contact">
            <a>
              <FontAwesomeIcon
                icon={["fab", "dribbble"]}
                size="xs"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </span>
        <span className="lg:w-12">
          <Link href="/contact">
            <a>
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="xs"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </span>
        <span className="w-12">
          <Link href="/contact">
            <a>
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="xs"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </span>
        <span className="w-12">
          <Link href="/contact">
            <a>
              <FontAwesomeIcon
                icon={["fab", "bitbucket"]}
                size="xs"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </span>
        <span className="w-12">
          <Link href="/contact">
            <a>
              <FontAwesomeIcon
                icon={["fab", "medium-m"]}
                size="xs"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
