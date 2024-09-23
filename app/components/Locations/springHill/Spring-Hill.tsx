"use client";
import { useEffect } from "react";
import styles from "./SpringHill.module.css";
import { useRouter } from "next/navigation";

export default function SpringHill() {
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
    <section className={styles.SpringHillSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Mobile Car Detailing in Spring Hill</h1>
        <p>
          Nashville Car Detail delivers high-quality mobile car detailing
          services directly to your location in Spring Hill. Whether it’s a
          thorough exterior wash or an immaculate interior clean, we’re
          committed to giving your vehicle the attention it deserves. Serving
          all areas in Spring Hill and its surrounding neighborhoods, we take
          pride in providing excellent customer service, working diligently to
          ensure your car looks its best. With a focus on careful attention to
          detail and customer satisfaction, we make sure your car stays spotless
          and well-maintained, no matter the season or weather.
        </p>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2>Book Your Spring Hill Detailing Today</h2>
        <p>
          Contact us to schedule your mobile car detailing service in Spring Hill
          and experience the convenience of top-tier car care brought to your
          location.
        </p>
        <button className="btn--primary" onClick={handleScheduleClick}>
          Schedule Now
        </button>
      </div>
    </section>
  );
}
