import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

/**
 * Creates a navigation bar for the application
 *
 * @returns links to different pages
 */

const Navbar = () => {
  const initial: string = "<MK/>";
  const router = useRouter();

  return (
    <header className="flex justify-around md:justify-between md:px-32  sticky top-0  text-gray-500 bg-white h-20 items-center z-50 opacity-100 animated ">
      <div className=" flex text-gray-800 h-12 w-12 rounded-full border border  items-center">
        <Link href="/">
          <a className="cursor-pointer">{initial}</a>
        </Link>
      </div>
      <div className="hidden md:flex">
        <nav className="space-x-8 text-inherit">
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? `text-indigo-700 `
                  : `hover:text-yellow-600`
              }
              // onClick={hideBlogs}
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
              // onClick={closeMenu}
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
              // onClick={closeMenu}
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
              // onClick={closeMenu}
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
              // onClick={closeMenu}
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
