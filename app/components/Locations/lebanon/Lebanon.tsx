"use client";
import { useEffect } from "react";
import styles from "./Lebanon.module.css";
import { useRouter } from "next/navigation";

export default function Lebanon() {
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
    <section className={styles.lebanonSection}>
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Lebanon</h1>
        <p>
          Nashville Car Detail is delighted to offer mobile car detailing
          services throughout Lebanon, TN. Our team of experts brings
          high-quality detailing directly to your location, making it convenient
          for you. We specialize in both interior and exterior detailing, using
          top-notch products and techniques to ensure your vehicle looks its
          best. Serving all neighborhoods in Lebanon, we are committed to
          providing excellent service and maintaining the cleanliness and
          protection of your car.
        </p>
      </div>

      <div className={styles.ctaSection}>
        <h2>Book Your Lebanon Mobile Detailing Service Today</h2>
        <p>
          Experience the ease and convenience of mobile car detailing in
          Lebanon. Schedule your appointment with Nashville Car Detail, and let
          our team bring expert care and attention directly to your vehicle.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
