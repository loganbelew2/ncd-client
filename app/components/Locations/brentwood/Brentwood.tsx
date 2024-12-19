import Link from "next/link";
import styles from "./Brentwood.module.css";
import Image from "next/image";
import PrimaryButton from "../../Buttons/Primary-Button";
import SecondaryButton from "../../Buttons/Secondary-Button";

export default function Brentwood() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Professional Mobile Car Detailing in Brentwood, TN</h1>
          <p>
            We proudly serve all areas of Brentwood, TN, bringing premium car
            detailing services right to your location!
          </p>
        </div>
        <div className={styles.reviewsContainer}>
          <Image
            src={"/images/google.png"}
            height={30}
            width={30}
            alt="google"
          />
          <Image
            src={"/images/5stars.png"}
            height={30}
            width={100}
            alt="5 stars"
          />
          <p>
            Average Google Rating: <span>5.0 out of 5.0</span>
          </p>
        </div>
        <div className={styles.heroButtons}>
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </div>
      <section className={styles.brentwoodSection}>
        <div className={styles.whyChooseUs}>
          <h2>Why Choose Our Brentwood Mobile Car Detailing Services?</h2>
          <p>
            At Nashville Car Detail, we’re committed to providing top-quality
            mobile car detailing services in Brentwood. Our services cover every
            detail, from deep interior cleaning and upholstery care to exterior
            washing, waxing, clay bar treatment, and paint protection. We bring
            our fully equipped mobile detailing unit directly to your driveway,
            saving you time and delivering outstanding results.
          </p>
          <h3>Comprehensive Car Detailing Services in Brentwood</h3>
          <p>
            Whether you’re in the heart of Brentwood, Cool Springs, or other
            surrounding areas, our team arrives ready to detail your vehicle
            on-site. Our service packages are tailored to your vehicle’s needs
            and budget, offering a hassle-free solution for those who want a
            clean and protected car without leaving home.
          </p>
          <h3>Serving Brentwood and Nearby Areas</h3>
          <p>
            Our reach extends beyond Brentwood! We also serve nearby areas like
            <Link className={styles.link} href={"/locations/nashville"}>
              {" "}
              Nashville
            </Link>
            ,
            <Link className={styles.link} href={"/locations/murfreesboro"}>
              {" "}
              Murfreesboro
            </Link>
            ,
            <Link className={styles.link} href={"/locations/franklin"}>
              {" "}
              Franklin
            </Link>{" "}
            and other nearby
            <Link className={styles.link} href={"/locations"}>
              {" "}
              Locations
            </Link>
            . Experience high-quality car detailing with the convenience of
            mobile service. Schedule your appointment today and let us help keep
            your car looking its best.
          </p>
        </div>
      </section>
    </>
  );
}
