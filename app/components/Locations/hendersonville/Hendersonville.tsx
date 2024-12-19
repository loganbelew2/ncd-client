import Link from "next/link";
import styles from "./Hendersonville.module.css";
import Image from "next/image";
import PrimaryButton from "../../Buttons/Primary-Button";
import SecondaryButton from "../../Buttons/Secondary-Button";

export default function Hendersonville() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Professional Mobile Car Detailing in Hendersonville, TN</h1>
          <p>
            We proudly serve all areas of Hendersonville, TN, bringing premium
            car detailing services right to your location!
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

      <section className={styles.hendersonvilleSection}>
        <div className={styles.whyChooseUs}>
          <h2>Why Choose Our Hendersonville Mobile Car Detailing Services?</h2>
          <p>
            At Nashville Car Detail, we’re dedicated to providing high-quality
            mobile car detailing services in Hendersonville. Our offerings
            include everything from thorough interior cleaning and upholstery
            care to exterior washing, waxing, clay bar treatment, and paint
            protection. We bring our fully equipped mobile detailing unit
            directly to your driveway, saving you time and ensuring excellent
            results.
          </p>
          <h3>Comprehensive Car Detailing Services in Hendersonville</h3>
          <p>
            Whether you’re in downtown Hendersonville, near Old Hickory Lake, or
            any other part of town, our team arrives ready to detail your
            vehicle on-site. Our packages are tailored to fit your vehicle’s
            needs and budget, providing a convenient solution for those wanting
            a spotless car without visiting a traditional car wash.
          </p>
          <h3>Serving Hendersonville and Nearby Areas</h3>
          <p>
            Our services extend beyond Hendersonville! We also serve nearby
            areas like
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
            </Link>
            ,
            <Link className={styles.link} href={"/locations/brentwood"}>
              {" "}
              Brentwood
            </Link>
            , and other nearby
            <Link className={styles.link} href={"/locations"}>
              {" "}
              Locations
            </Link>
            . Book your appointment today and enjoy top-tier car detailing with
            the convenience of mobile service.
          </p>
        </div>
      </section>
    </>
  );
}
