import Link from "next/link";
import styles from "./Smyrna.module.css";

export default function Smyrna() {
  return (
    <section className={styles.smyrnaSection}>
      <div className={styles.header}>
        <h1>Expert Mobile Car Detailing in Smyrna, TN</h1>
        <p>
          We bring our top-rated mobile car detailing services directly to you in Smyrna, TN. No need to drive to a car-wash let us come to your location!
        </p>
      </div>

      <div className={styles.whyChooseUs}>
        <h2>Why Choose Our Smyrna Mobile Car Detailing Services?</h2>
        <p>
          At Nashville Car Detail, we specialize in providing premium mobile car detailing services in Smyrna. Our offerings include everything from interior cleaning and upholstery care to exterior washing, waxing, clay bar treatment, and paint protection. With our mobile detailing service, we come to you, saving you time while delivering exceptional results.
        </p>
        <h3>Comprehensive Car Detailing Services in Smyrna</h3>
        <p>
          Whether you&apos;re near Sam Ridley Parkway or in another area of Smyrna, our team will arrive at your location fully equipped to detail your vehicle on-site. Our service packages are customizable to meet your car’s needs and your budget, providing a convenient, hassle-free way to maintain a spotless car.
        </p>
        <h3>Serving Smyrna and Surrounding Areas</h3>
        <p>
          Our services don’t stop at Smyrna! We also proudly serve nearby locations such as 
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
          </Link>. Enjoy the convenience of mobile service with high-quality car detailing. Schedule your appointment today and let us bring the shine to your vehicle.
        </p>
      </div>
    </section>
  );
}
