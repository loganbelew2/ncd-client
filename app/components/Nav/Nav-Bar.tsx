"use client";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/Primary-Button";
import { useRouter } from "next/navigation";
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
    width="32"
    height="32"
    fill="white"
  >
    <path d="M18.3 5.7c.4.4.4 1 0 1.4L13.4 12l4.9 4.9c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.9 4.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L10.6 12 5.7 7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 10.6l4.9-4.9c.4-.4 1-.4 1.4 0z" />
  </svg>
);

interface NavProps {
  isFooter?: boolean;
}
export const NavBar = ({ isFooter }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };
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
      {isOpen && (
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={closeMenu}
        ></div>
      )}

      <div className={`${styles.nav} ${isOpen && styles.open}`}>
        {isOpen ? (
          <div className={styles.nav_open_top_bar}>
            <p>Monday to Saturday: 7am to 7pm</p>
            <p>Call or book with us anytime</p>
          </div>
        ) : (
          ""
        )}
        <div className={styles.services}>
          <button
            onClick={toggleServiceDropdown}
            className={`${styles.serviceDropdownButton} ${
              isServiceDropdownOpen ? styles.turnIcon : ""
            }`}
          >
            Services
            <span className={styles.dropdownIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <ul
            className={`${styles.dropdown} ${
              isServiceDropdownOpen ? styles.showDropdown : ""
            }`}
          >
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleServiceDropdown();
                }}
                href={`/services`}
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleServiceDropdown();
                }}
                href={`/services/exterior-detailing`}
              >
                Exterior Detail
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleServiceDropdown();
                }}
                href={`/services/interior-detailing`}
              >
                Interior Detail
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleServiceDropdown();
                }}
                href={`/services/full-detailing`}
              >
                Full Detail
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.locations}>
          <button
            onClick={toggleLocationDropdown}
            className={`${styles.locationDropdownButton} ${
              isLocationDropdownOpen ? styles.turnIcon : ""
            }`}
          >
            Locations
            <span className={styles.dropdownIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <ul
            className={`${styles.dropdown} ${
              isLocationDropdownOpen ? styles.showDropdown : ""
            }`}
          >
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations`}
              >
                All Locations
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/brentwood`}
              >
                Brentwood, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/franklin`}
              >
                Franklin, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/mt-juliet`}
              >
                Mt. Juliet, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/murfreesboro`}
              >
                Murfreesboro, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/nashville`}
              >
                Nashville, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/gallatin`}
              >
                Gallatin, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/hendersonville`}
              >
                Hendersonville, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/lebanon`}
              >
                Lebanon, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/smyrna`}
              >
                Smyrna, TN
              </Link>
            </li>
            <li>
              <Link
                className={styles.sublink}
                onClick={() => {
                  closeMenu();
                  toggleLocationDropdown();
                }}
                href={`/locations/spring-hill`}
              >
                Spring Hill, TN
              </Link>
            </li>
          </ul>
        </div>

        <Link className={styles.link} href="/reviews" onClick={closeMenu}>
          Reviews
        </Link>
        <Link className={styles.link} href="/pricing" onClick={closeMenu}>
          Pricing
        </Link>
        <Link className={styles.link} href="/gift-cards" onClick={closeMenu}>
          Gift Cards
        </Link>
        <Link className={styles.link} href="/contact" onClick={closeMenu}>
          Contact Us
        </Link>
        <div className={styles.phone__div}>
          <a href="tel:+16159271987">
            <div>
              {isOpen ? (
                <div>
                  <Image
                    src="/images/phone_white.png"
                    alt="phone icon"
                    width={20}
                    height={20}
                  ></Image>
                  615-927-1987
                </div>
              ) : (
                <div>
                  <Image
                    src="/images/phone.png"
                    alt="phone icon"
                    color="white"
                    width={20}
                    height={20}
                  ></Image>
                  615-927-1987
                </div>
              )}
            </div>
          </a>
        </div>
        <PrimaryButton closeMenu={closeMenu} />
      </div>
    </div>
  );
};
