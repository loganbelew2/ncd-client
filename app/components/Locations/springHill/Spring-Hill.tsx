import Link from "next/link";
import styles from "./SpringHill.module.css";

export default function SpringHill() {
  return (
    <section className={styles.springHillSection}>
      <div className={styles.header}>
        <h1>Top-Quality Mobile Car Detailing in Spring Hill, TN</h1>
        <p>
          Experience premium mobile car detailing services in Spring Hill, TN. We bring professional detailing directly to your driveway—no need to drive anywhere!
        </p>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Our Spring Hill Mobile Car Detailing Services?</h2>
        <p>
          At Nashville Car Detail, we offer mobile car detailing services across Spring Hill that save you time and provide exceptional results. From deep interior cleaning and upholstery care to exterior services like washing, waxing, clay bar treatment, and paint protection, we do it all. Our mobile detailing unit is fully equipped to come to your location and provide a thorough clean right at your doorstep.
        </p>
        <h3>Comprehensive Car Detailing Services in Spring Hill</h3>
        <p>
          Whether you&apos;re near Port Royal Road or in another part of Spring Hill, our team arrives prepared to detail your vehicle on-site. We offer customizable packages to suit your car&apos;s needs and your budget, providing a convenient, hassle-free experience for anyone looking for a pristine vehicle without leaving home.
        </p>
        <h3>Serving Spring Hill and Surrounding Areas</h3>
        <p>
          Our services extend beyond Spring Hill! We also proudly serve the nearby locations of 
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
          </Link>. Experience hassle-free mobile detailing with exceptional results. Book your appointment today and let us take care of your vehicle.
        </p>
      </div>
    </section>
  );
}
