import Link from "next/link";
import styles from "./Franklin.module.css";

export default function Franklin() {
  return (
    <section className={styles.franklinSection}>
      <div className={styles.header}>
        <h1>Professional Mobile Car Detailing in Franklin, TN</h1>
        <p>
          We proudly serve all areas of Franklin, TN, bringing premium car detailing services right to your location!
        </p>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Our Franklin Mobile Car Detailing Services?</h2>
        <p>
          At Nashville Car Detail, we’re committed to providing top-quality mobile car detailing services in Franklin. Our services cover every detail, from deep interior cleaning and upholstery care to exterior washing, waxing, clay bar treatment, and paint protection. We bring our fully equipped mobile detailing unit directly to your driveway, saving you time and delivering outstanding results.
        </p>
        <h3>Comprehensive Car Detailing Services in Franklin</h3>
        <p>
          Whether you’re in Downtown Franklin, Cool Springs, or other areas around Franklin, our team arrives ready to detail your vehicle on-site. Our service packages are tailored to your vehicle’s needs and budget, offering a hassle-free solution for those who want a clean and protected car without leaving home.
        </p>
        <h3>Serving Franklin and Nearby Areas</h3>
        <p>
          Our reach extends beyond Franklin! We also serve nearby areas like 
          <Link className={styles.link} href={"/locations/nashville"}>
            {" "}Nashville
          </Link>, 
          <Link className={styles.link} href={"/locations/murfreesboro"}>
            {" "}Murfreesboro
          </Link>, 
          <Link className={styles.link} href={"/locations/brentwood"}>
            {" "}Brentwood
          </Link> and other nearby 
          <Link className={styles.link} href={"/locations"}>
            {" "}Locations
          </Link>. Experience high-quality car detailing with the convenience of mobile service. Schedule your appointment today and let us help keep your car looking its best.
        </p>
      </div>
    </section>
  );
}
