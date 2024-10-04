"use client";
import { useEffect } from "react";
import styles from "./Nashville.module.css";
import { useRouter } from "next/navigation";

export default function Nashville() {
  const router = useRouter();

  function handleScheduleClick() {
    router.push("/booking");
  }

  return (
    <section className={styles.nashvilleSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Nashville</h1>
        <p>
          Nashville Car Detail proudly offers high-quality mobile car detailing
          services directly to your location in Nashville, TN. Our experienced
          team specializes in comprehensive exterior and interior detailing,
          ensuring that your vehicle receives the meticulous care it deserves.
          We serve all neighborhoods in Nashville, providing exceptional
          customer service and a commitment to excellence. Whether you need a
          thorough wash, waxing, or interior shampooing, our services are
          designed to keep your car spotless and well-maintained in any season.
        </p>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2>Book Your Nashville Mobile Detailing Service Today</h2>
        <p>
          Experience the convenience of top-tier car care right at your
          doorstep. Contact Nashville Car Detail to schedule your mobile car
          detailing service in Nashville. Our team is ready to provide the
          highest standard of detailing, ensuring your vehicle looks its best.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
