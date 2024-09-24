"use client";
import { useEffect } from "react";
import styles from "./Murfreesboro.module.css";
import { useRouter } from "next/navigation";

export default function Murfreesboro() {
  const router = useRouter();

  function handleScheduleClick() {
    router.push("/booking");
  }

  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add(styles.serviceBody);
    const mainElement = document.querySelector(".main");
    mainElement?.classList.add(styles.mainn);

    // Cleanup function to remove the classes when the component unmounts
    return () => {
      document.body.classList.remove(styles.serviceBody); // Remove from body
      mainElement?.classList.remove(styles.mainn); // Remove from .main element
    };
  }, []);

  return (
    <section className={styles.murfreesboroSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Murfreesboro</h1>
        <p>
          Nashville Car Detail proudly offers high-quality mobile car detailing
          services directly to your location in Murfreesboro, TN. Our
          experienced team specializes in comprehensive exterior and interior
          detailing, ensuring that your vehicle receives the meticulous care it
          deserves. We serve all neighborhoods in Murfreesboro, providing
          exceptional customer service and a commitment to excellence. Whether
          you need a thorough wash, waxing, or interior shampooing, our services
          are designed to keep your car spotless and well-maintained in any
          season.
        </p>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2>Book Your Murfreesboro Mobile Detailing Service Today</h2>
        <p>
          Experience the convenience of top-tier car care right at your
          doorstep. Contact Nashville Car Detail to schedule your mobile car
          detailing service in Murfreesboro. Our team is ready to provide the
          highest standard of detailing, ensuring your vehicle looks its best.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
