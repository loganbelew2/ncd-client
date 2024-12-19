import Link from "next/link";
import styles from "./Nashville.module.css";
import Image from "next/image";
import PrimaryButton from "../../Buttons/Primary-Button";
import SecondaryButton from "../../Buttons/Secondary-Button";

export default function Nashville() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Premium Mobile Car Detailing Services in Nashville, TN</h1>
          <p>
            We service all neighborhoods in Nashville, TN and will drive to your
            driveway to give your car the clean it deserves!
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
      <section className={styles.nashvilleSection}>
        <div className={styles.whyChooseUs}>
          <h2>Why Choose Our Nashville Mobile Car Detailing Services?</h2>
          <p>
            At Nashville Car Detail, we provide professional and convenient
            mobile detailing services throughout the Nashville area. Our mobile
            detailing services cover everything from deep interior cleaning,
            upholstery care, and stain removal, to exterior services like wash,
            wax, clay bar treatment, and paint protection. By bringing our
            services directly to you, we save you time while delivering
            exceptional results.
          </p>
          <h3>Comprehensive Car Detailing Services in Nashville</h3>
          <p>
            Whether you’re in Downtown Nashville, East Nashville, The Gulch, or
            any other Nashville neighborhood, our team comes to you fully
            equipped to detail your vehicle on-site. From a simple wash to a
            full-service detail, we have packages designed to meet your car’s
            needs and your budget. Our mobile detailing is perfect for busy
            professionals, families, and anyone wanting a pristine car without
            the hassle of a traditional car wash.
          </p>
          <h3>Serving Nashville and Surrounding Areas</h3>
          <p>
            Our services aren’t limited to Nashville alone! We also provide
            mobile detailing in
            <Link className={styles.link} href={"/locations/murfreesboro"}>
              {" "}
              Murfreesboro
            </Link>
            <Link className={styles.link} href={"/locations/franklin"}>
              {", "}
              Franklin{", "}
            </Link>
            <Link className={styles.link} href={"/locations/brentwood"}>
              {" "}
              Brentwood{" "}
            </Link>
            and other nearby{" "}
            <Link className={styles.link} href={"/locations"}>
              Locations
            </Link>
            . Experience top-notch car detailing and the ease of mobile service.
            Book your appointment today and let us bring out the best in your
            vehicle.
          </p>
        </div>
      </section>
    </>
  );
}
