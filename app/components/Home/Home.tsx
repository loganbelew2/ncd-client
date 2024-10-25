"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import PrimaryButton from "../Buttons/Primary-Button";
import ContactUs from "../Forms/ContactUs";
import LocationsCarousel from "../Carousel/LocationsCarousel";
import Link from "next/link";
import Services from "../Services/Services";
import SecondaryButton from "../Buttons/Secondary-Button";
import Process from "../Process/Process";
import AboutUs from "../AboutUs/AboutUs";
import WhyUs from "../WhyUs/WhyUs";
export default function Home() {
  return (
    <div className={styles.home__container}>
      <section className={styles.hero__container}>
        <h1 className={styles.title}>
          Mobile car detailing <br />
          in Nashville
        </h1>
        <p className={styles.subheading}>
          Quick Online Booking, Professional Detailing, and Exceptional Results
          –{" "}
          <span className="font--blue font--bold">
            All Without Leaving Home
          </span>
        </p>
        <div className={styles.heroButtons}>
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </section>
      <section className={styles.locations__section}>
        <h2 className="h2 txt-center">Service Areas</h2>
        <p className={styles.subheading}>
          Check out all of the <Link href={"/locations"}>Locations </Link> we
          proudly serve and let us give your car the shine it deserves!
        </p>
        <LocationsCarousel />
      </section>
      <Services />
      <WhyUs/>
      <AboutUs/>
      <Process/>
    </div>
  );
}
