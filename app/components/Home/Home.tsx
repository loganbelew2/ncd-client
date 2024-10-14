"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import PrimaryButton from "../Buttons/Primary-Button";
import ContactUs from "../Forms/ContactUs";
import LocationsCarousel from "../Carousel/LocationsCarousel";
import Link from "next/link";
import LearnMoreButton from "../Buttons/Learn-More-Button";
export default function Home() {
  return (
    <div className={styles.home__container}>
      <section className={styles.hero__container}>
        <div className={styles.hero__container__left}>
          <h1 className={styles.title}>
            Mobile auto detailing <br />
            in Nashville
          </h1>
          <p className={styles.subheading}>
            Quick Online Booking, Professional Detailing, and Exceptional
            Results –{" "}
            <span className="font--blue">All Without Leaving Home</span>
          </p>

          <PrimaryButton />
        </div>

        <div className={styles.hero__container__right}>
          <Image
            src={"/images/interiorDetail.jpg"}
            alt="Interior Detail"
            className={styles.image}
            layout="responsive"
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <section className={styles.locations__section}>
        <h2 className="h2 txt-center">Service Areas</h2>
        <p>
          Check out all of the <Link href={"/locations"}>Locations </Link> we
          proudly serve and let us give your car the shine it deserves!
        </p>
        <LocationsCarousel />
      </section>
      <section className={styles.services_section}>
        <h2 className="h2 txt-center">Our Detailing Services</h2>
        <p>
          We keep it simple with our 3 services and aim to provide the most
          value at the most affordable cost to you all while never sacrificing
          for quality!
        </p>
        <div className={styles.services_exterior}>
          <div className={styles.services_exterior_left}>
            <h3 className="h3">Exterior detail | Wash & Wax</h3>
            <p>
              When you book an exterior detailing service at Nashville Car
              Detail you will be investing in your car's appearance and
              protecting your vehicle from the elements. We will thoroughly hand
              wash the vehicle and hand wax the paint to protect it.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={1} />
              <LearnMoreButton service="exterior-detail" />
            </div>
          </div>
          <div className={styles.services_exterior_right}>
            <Image
              src={"/images/exterior-pressure-wash.jpg"}
              alt="Car Wash"
              layout="responsive"
              width={1024}
              height={1024}
            />
          </div>
        </div>
        <div className={`${styles.services_exterior} ${styles.second_service}`}>
          <div className={styles.services_exterior_right}>
            <Image
              src={"/images/seat-extraction.jpg"}
              alt="Interior Detail"
              layout="responsive"
              width={1024}
              height={1024}
            />
          </div>
          <div className={styles.services_exterior_left}>
            <h3 className="h3">Interior detail | Deep Clean</h3>
            <p>
              When you book an interior detailing service at Nashville Car
              Detail you will be investing in your car's appearance and
              protecting your vehicle from the elements. We will thoroughly hand
              wash the vehicle and hand wax the paint to protect it.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={2} />
              <LearnMoreButton service="interior-detail" />
            </div>
          </div>
        </div>
        <div className={styles.services_exterior}>
          <div className={styles.services_exterior_left}>
            <h3 className="h3">Full detail | Inside & Out</h3>
            <p>
              When you book an exterior service at Nashville Car Detail you will
              be investing in your car's appearance and protecting your vehicle
              from the elements. We will thoroughly hand wash the vehicle and
              hand wax the paint to protect it.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={3} />
              <LearnMoreButton service="full-detail" />
            </div>
          </div>
          <div className={styles.services_exterior_right}>
            <Image
              src={"/images/full-detailing.jpg"}
              alt="Interior Detail"
              layout="responsive"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
