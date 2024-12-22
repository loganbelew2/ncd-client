import { NavBar } from "../Nav/Nav-Bar";
import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.quickLinks}>
        <h4>Quick Links</h4>
        <ul className={styles.ul}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/locations">All Locations</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/gift-cards">Gift Cards</Link>
          </li>
        </ul>
      </div>

      <div className={styles.locations}>
        <h4>Our Locations</h4>
        <ul className={styles.ul}>
          <li>
            <Link href="/locations/brentwood">Brentwood, TN</Link>
          </li>
          <li>
            <Link href="/locations/franklin">Franklin, TN</Link>
          </li>
          <li>
            <Link href="/locations/mt-juliet">Mt. Juliet, TN</Link>
          </li>
          <li>
            <Link href="/locations/murfreesboro">Murfreesboro, TN</Link>
          </li>
          <li>
            <Link href="/locations/nashville">Nashville, TN</Link>
          </li>
          <li>
            <Link href="/locations/gallatin">Gallatin, TN</Link>
          </li>
          <li>
            <Link href="/locations/hendersonville">Hendersonville, TN</Link>
          </li>
          <li>
            <Link href="/locations/lebanon">Lebanon, TN</Link>
          </li>
          <li>
            <Link href="/locations/smyrna">Smyrna, TN</Link>
          </li>
          <li>
            <Link href="/locations/spring-hill">Spring Hill, TN</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__info}>
        <p>Hours: 7am to 7pm Monday to Saturday</p>
        <p>© 2024 Nashville Car Detail. All Rights Reserved</p>
      </div>

      <address className={styles.footer__contact}>
        <p>
          Email:{" "}
          <a href="mailto: logan@nashvillecardetail.com">
            logan@nashvillecardetail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+16159271987">(615)-927-1987</a>
        </p>
        <p>Location: Nashville, TN</p>
      </address>
    </div>
  );
}
