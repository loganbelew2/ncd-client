"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import PrimaryButton from "../Buttons/Primary-Button";
import ContactUs from "../Forms/ContactUs"
import LocationsCarousel from "../Carousel/LocationsCarousel";
export default function Home() {


  return (
    <>
      <section className={styles.hero__container}>
        <div className={styles.hero__container__left}>
          <h1 className={styles.title}>Mobile auto detailing in Nashville</h1>
          <p className={styles.subheading}>
            Experience the convenience of our mobile detailing service, designed
            to fit seamlessly into your schedule with clear and upfront pricing.
            We operate in Nashville and surrounding areas. All we need is access to water and electric hookups and Wherever you park,
            we&apos;ll leave no mark!
          </p>
          <PrimaryButton />
        </div>

        <div className={styles.hero__container__right}>
          <Image
            src={"/images/heroimage.webp"}
            alt="car"
            className={styles.image}
            width={500}
            height={1} 
          />
        </div>
      </section>
      <section className="locations">
        <LocationsCarousel/>
      </section>
      <ContactUs/>
    </>
  );
}
