import { NavBar } from "../Nav/Nav-Bar";
import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.footer__container}>
      <div>
        <p>Hours: 7am to 7pm Monday to Sunday</p>
        <p>© 2024 Nashville Car Detail. All Rights Reserved</p>
      </div>
      <address>
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
