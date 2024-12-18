"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import PrimaryButton from "../Buttons/Primary-Button";
import LocationsCarousel from "../Carousel/LocationsCarousel";
import Link from "next/link";
import Services from "../Services/Services";
import SecondaryButton from "../Buttons/Secondary-Button";
import Process from "../Process/Process";
import AboutUs from "../AboutUs/AboutUs";
import WhyUs from "../WhyUs/WhyUs";
import { Packages } from "../Packages/Packages";
import LocationsLearn from "../Locations/LocationsLearn/LocationsLearn";
import Reviews from "../Reviews/Reviews";

export default function Home() {
  useEffect(() => {
    (function (g: any, i: Document, f: string, t: string, u: string) {
      g[u] =
        g[u] ||
        function () {
          (g[u].q = g[u].q || []).push(arguments);
        };

      const p = i.createElement(f) as HTMLScriptElement;
      p.async = true;
      p.src = t;

      const s = i.getElementsByTagName(f)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(p, s);
      }
    })(
      window,
      document,
      "script",
      "https://cdn.giftup.app/dist/gift-up.js",
      "giftup"
    );
  }, []);

  return (
    <div className={styles.home__container}>
      <section className={styles.hero__container}>
        <h1 className={styles.title}>
          Mobile Car Detailing <br />
          In Nashville
        </h1>
        <p className={styles.subheading}>
          Quick Booking and Professional Detailing
          –{" "}
          <span className="font--blue font--bold">
            All Without Leaving Home
          </span>
        </p>

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
      </section>

      <WhyUs />
      <Services />
      <Packages />
      <Process />
      <Reviews />
      <LocationsLearn /> 
      <AboutUs />
    </div>
  );
}
