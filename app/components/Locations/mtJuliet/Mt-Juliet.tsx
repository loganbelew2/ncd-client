import Link from "next/link";
import styles from "./MtJuliet.module.css";

export default function MtJuliet() {
  return (
    <section className={styles.mtJulietSection}>
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing in Mt. Juliet, TN</h1>
        <p>
          We proudly offer high-quality mobile car detailing services throughout Mt. Juliet, TN, bringing the car wash directly to your location!
        </p>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Our Mt. Juliet Mobile Car Detailing Services?</h2>
        <p>
          At Nashville Car Detail, we specialize in providing top-notch mobile car detailing services in Mt. Juliet. Our services cover a wide range, including interior cleaning, upholstery care, exterior washing, waxing, clay bar treatment, and paint protection. We bring our fully equipped mobile detailing service to your home, providing you with professional results and convenience.
        </p>
        <h3>Comprehensive Car Detailing Services in Mt. Juliet</h3>
        <p>
          Whether you&apos;re near the Providence Marketplace, in the heart of Mt. Juliet, or in any other part of the city, we’ll come to your location fully prepared. Our service packages are designed to meet your car’s needs and your budget, offering a hassle-free way to keep your car looking great without leaving your driveway.
        </p>
        <h3>Serving Mt. Juliet and Surrounding Areas</h3>
        <p>
          We don’t just serve Mt. Juliet! Our mobile detailing services also extend to nearby areas such as 
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
          </Link>. Get the convenience of mobile service with exceptional car detailing results. Book your appointment today!
        </p>
      </div>
    </section>
  );
}
