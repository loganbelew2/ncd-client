"use client"
import { useEffect } from "react";
import styles from "./GiftCards.module.css"
export default function GiftCards() {
  useEffect(() => {
    (function (g: any, i: Document, f: string, t: string, u: string) {
      g[u] =
        g[u] ||
        function () {
          (g[u].q = g[u].q || []).push(arguments);
        };

      const p = i.createElement(f) as HTMLScriptElement;
      p.async = true;
      p.src = t;

      const s = i.getElementsByTagName(f)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(p, s);
      }
    })(
      window,
      document,
      "script",
      "https://cdn.giftup.app/dist/gift-up.js",
      "giftup"
    );
  }, []);

  return (
    <section className={styles.giftWrapper}>
      <h2>Feeling Generous? Give Someone A Gift Card </h2>
      <p>
        Perfect for birthdays, holidays or celebrations! Get it delivered by
        email or print it out at home.
      </p>
      <div
        className="gift-up-target"
        data-site-id="1b1388e7-e3dd-413c-a8df-08dd032eab51"
        data-platform="Other"
      ></div>
    </section>
  );
}
