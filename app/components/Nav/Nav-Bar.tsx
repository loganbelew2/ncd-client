"use client";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/Primary-Button";

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 18L20 18"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 12L20 12"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 6L20 6"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="black"
  >
    <path d="M18.3 5.7c.4.4.4 1 0 1.4L13.4 12l4.9 4.9c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.9 4.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L10.6 12 5.7 7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 10.6l4.9-4.9c.4-.4 1-.4 1.4 0z" />
  </svg>
);

interface NavProps {
  isFooter?: boolean;
}
export const NavBar = ({ isFooter }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.navContainer} `}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/images/NCD_Logo_White_BG.jpg"
            alt="Nashville Car Detail Logo"
            width={90}
            height={90}
          />
        </Link>
      </div>

      {isOpen != true && (
        <div className={styles.show_phone_nav_primaryBtn}>
          <PrimaryButton />
        </div>
      )}
      <div
        className={`${styles.hamburger} ${isOpen && styles.fixedHamburger}`}
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>
      <div className={`${styles.nav} ${isOpen && styles.open}`}>
        {isOpen && (
          <div className={styles.nav_open_top_bar}>
            <p>Monday to Sunday: 7am to 7pm</p>
            <p>Call or book with us anytime</p>
          </div>
        )}
        <Link className={styles.link} href="/packages" onClick={closeMenu}>
          Services
        </Link>
        <Link className={styles.link} href="/locations" onClick={closeMenu}>
          Locations
        </Link>
        <Link className={styles.link} href="/reviews" onClick={closeMenu}>
          Reviews
        </Link>
        <div className={styles.phone__div}>
          <a href="tel:+16159271987">
            <div>
              <Image
                src="/images/phone.png"
                alt="phone icon"
                width={20}
                height={20}
              ></Image>
              615-927-1987
            </div>
          </a>
        </div>
        <PrimaryButton closeMenu={closeMenu} />
      </div>
    </div>
  );
};
