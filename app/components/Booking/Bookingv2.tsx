"use client";
import { useEffect } from "react";
import styles from "./Booking.module.css";
export default function BookingV2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://squareup.com/appointments/buyer/widget/3inp0q2s30l40e/LGS9SEJZ0MAGP.js";
    script.async = true;
    script.id = "square-appointments-script";

    document.getElementById("square-appointments-container")?.appendChild(script);

    return () => {
      // Cleanup to remove the script when the component unmounts
      const existingScript = document.getElementById("square-appointments-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className={styles.bookingSection}>
      <h1>Schedule Now and Pay Later</h1>
      <p>
        We will come to you and restore your car while you eat, work or bath
        the dog
      </p>
      <div id="square-appointments-container"></div>
    </section>
  );
}
