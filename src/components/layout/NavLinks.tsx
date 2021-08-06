import Link from "next/link";
import { useRouter } from "next/router";
import useClickOutside from "@hooks/useClickOutside";
import styles from "@styles/navbar.module.scss";

interface Dispaly {
  displayStyle: string;
  closeMenu(): void;
  showBlog?(): void;
  hideBlogs?(): void;
}

const NavLinks = ({
  displayStyle,
  closeMenu,
  showBlog,
  hideBlogs,
}: Dispaly) => {
  const router = useRouter();
  const domNode = useClickOutside<HTMLDivElement>(() => {
    closeMenu();
  });

  return (
    <div className={`${displayStyle} space-x-6 `} ref={domNode}>
      <Link href="/">
        <a
          className={
            router.pathname == "/"
              ? `${styles.activeClass} `
              : `${styles.hoverLink}`
          }
          onClick={hideBlogs}
        >
          Home
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={
            router.pathname == "/portfolio"
              ? `${styles.activeClass} `
              : `${styles.hoverLink}`
          }
          onClick={closeMenu}
        >
          Portfolio
        </a>
      </Link>
      <Link href="/resume">
        <a
          className={
            router.pathname == "/resume"
              ? `${styles.activeClass}`
              : `${styles.hoverLink}`
          }
          onClick={closeMenu}
        >
          Resume
        </a>
      </Link>
      <Link href="/blogs">
        <a
          className={
            router.pathname == "/blogs"
              ? `${styles.activeClass}`
              : `${styles.hoverLink}`
          }
          onClick={showBlog}
        >
          Blogs
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={
            router.pathname == "/contact"
              ? `${styles.activeClass}`
              : `${styles.hoverLink}`
          }
          onClick={closeMenu}
        >
          Contact
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
