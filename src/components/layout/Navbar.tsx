import { useState } from "react";
import Link from "next/link";
import HambugerIcon from "../HambugerIcon";
import CloseIcon from "../CloseIcon";
import NavLinks from "./NavLinks";
import styles from "@styles/navbar.module.scss";

/**
 * Creates a navigation bar for the application
 *
 * @returns links to different pages
 */

const Navbar = () => {
  const initial: string = "<MK/>";

  const [isMenuOpen, setState] = useState(false);
  const [blogActive, setBlog] = useState(false);
  const showMenu = () => {
    setState(!isMenuOpen);
  };
  const closeMenu = () => {
    setState(false);
  };

  const showBlogs = () => {
    setBlog(true);
  };
  const hideBlogs = () => {
    setBlog(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">{initial}</Link>
      </div>

      <nav>
        <div className={`${styles.mobileMenu} sm:hidden flex items-center`}>
          {isMenuOpen && (
            <button
              className="focus:outline-none mobile-menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          )}
          {!isMenuOpen && (
            <button
              className="focus:outline-none mobile-menu"
              onClick={showMenu}
            >
              <HambugerIcon />
            </button>
          )}
        </div>
        {!isMenuOpen && (
          <div className="mx-auto">
            <NavLinks
              displayStyle={`hidden sm:flex sm:mr-4 sm:mx-auto text-xl ${styles.navLinks}`}
              closeMenu={closeMenu}
              showBlog={showBlogs}
              hideBlogs={hideBlogs}
            />
          </div>
        )}
        {isMenuOpen && (
          <div className="w-60 bg-gray-100 h-60">
            <NavLinks
              displayStyle="flex flex-col items-start uppercase space-y-4 transition duration-700 ease-in-out sm:hidden"
              closeMenu={closeMenu}
            />
          </div>
        )}
      </nav>
      <div className={blogActive ? "" : "hidden"}>
        <button className={styles.btn}>Sign up</button>
        <button className={styles.btn}>Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
