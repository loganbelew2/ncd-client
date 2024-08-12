import Link from "next/link";
import styles from "./Nav.module.css";
export const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
          <Link className={styles.link} href="/services">
            Services
          </Link>

          <Link className={styles.link} href="/Locations">
            Locations
          </Link>

          <Link className={styles.link} href="/About">
            About
          </Link>

          <Link className={styles.link} href="/contact">
            Contact Us
          </Link>
      </nav>
    </>
  );
};
