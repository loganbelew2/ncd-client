"use client";
import { useEffect } from "react";
import styles from "./Gallatin.module.css";
import { useRouter } from "next/navigation";

export default function Gallatin() {
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
    <section className={styles.gallatinSection}>
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Gallatin</h1>
        <p>
          Nashville Car Detail is proud to extend its top-quality mobile car
          detailing services to Gallatin, TN. Our experienced professionals
          offer a wide range of detailing services, including thorough interior
          cleaning and exterior polishing, right at your doorstep. We cover all
          areas in Gallatin, providing convenience and expertise that ensures
          your vehicle remains spotless and well-maintained. From washing to
          waxing, our services are designed to protect your car and enhance its
          appearance.
        </p>
      </div>

      <div className={styles.ctaSection}>
        <h2>Book Your Gallatin Mobile Detailing Service Today</h2>
        <p>
          Make the most of our professional car detailing services right where
          you need them. Contact Nashville Car Detail to schedule your mobile
          detailing service in Gallatin and experience unparalleled care for
          your vehicle.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
