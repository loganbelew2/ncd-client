import Link from "next/link";
import styles from "./Lebanon.module.css";

export default function Lebanon() {
  return (
    <section className={styles.lebanonSection}>
      <div className={styles.header}>
        <h1>Professional Mobile Car Detailing in Lebanon, TN</h1>
        <p>
          We proudly serve all areas of Lebanon, TN, bringing premium car detailing services directly to your location!
        </p>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Our Lebanon Mobile Car Detailing Services?</h2>
        <p>
          At Nashville Car Detail, we’re committed to providing high-quality mobile car detailing services in Lebanon. From deep interior cleaning and upholstery care to exterior washing, waxing, clay bar treatment, and paint protection, we bring our fully equipped mobile detailing unit right to your doorstep. Our services save you time while delivering exceptional results.
        </p>
        <h3>Comprehensive Car Detailing Services in Lebanon</h3>
        <p>
          Whether you’re near the Cumberland University area, on the west side of Lebanon, or in other parts of the city, our team will come directly to you. We offer a variety of service packages designed to meet your car’s needs and budget, providing a convenient and hassle-free solution for your detailing needs.
        </p>
        <h3>Serving Lebanon and Nearby Areas</h3>
        <p>
          Our services extend beyond Lebanon! We also provide mobile detailing in nearby areas like 
          <Link className={styles.link} href={"/locations/nashville"}>
            {" "}Nashville
          </Link>, 
          <Link className={styles.link} href={"/locations/murfreesboro"}>
            {" "}Murfreesboro
          </Link>, 
          <Link className={styles.link} href={"/locations/franklin"}>
            {" "}Franklin
          </Link>, 
          <Link className={styles.link} href={"/locations/brentwood"}>
            {" "}Brentwood
          </Link>, and other nearby 
          <Link className={styles.link} href={"/locations"}>
            {" "}Locations
          </Link>. Schedule your appointment today and enjoy a top-notch car detailing experience with the convenience of mobile service.
        </p>
      </div>
    </section>
  );
}
