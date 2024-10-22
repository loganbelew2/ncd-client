"use client";
import { useEffect } from "react";
import styles from "./Hendersonville.module.css";
import { useRouter } from "next/navigation";

export default function Hendersonville() {
  const router = useRouter();

  function handleScheduleClick() {
    router.push("/booking");
  }

  useEffect(() => {
    document.body.classList.add(styles.serviceBody);
    const mainElement = document.querySelector(".main");
    mainElement?.classList.add(styles.mainn);

    return () => {
      document.body.classList.remove(styles.serviceBody);
      mainElement?.classList.remove(styles.mainn);
    };
  }, []);

  return (
    <section className={styles.hendersonvilleSection}>
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Hendersonville</h1>
        <p>
          Nashville Car Detail proudly serves Hendersonville, TN, offering
          high-quality mobile car detailing services at your convenience. Our
          expert team is dedicated to delivering comprehensive interior and
          exterior detailing, ensuring that your vehicle receives the best care
          possible. We cater to all neighborhoods in Hendersonville, providing
          exceptional service and attention to detail. From exterior washes and
          waxing to deep interior cleaning, we ensure your car stays in pristine
          condition year-round.
        </p>
      </div>

      <div className={styles.ctaSection}>
        <h2>Book Your Hendersonville Mobile Detailing Service Today</h2>
        <p>
          Enjoy the ease of professional car care right at your location.
          Schedule your mobile detailing service in Hendersonville with
          Nashville Car Detail. Our team is committed to making your vehicle
          look its best with meticulous attention to detail.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
