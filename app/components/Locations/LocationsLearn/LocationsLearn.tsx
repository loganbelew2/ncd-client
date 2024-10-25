"use client"
import Image from "next/image";
import styles from "./LocationsLearn.module.css";
import { useRouter } from "next/navigation";
export default function LocationsLearn() {
  const router = useRouter();
  return (
    <section className={styles.LearnWrapper}>
      <div className={styles.LearnLeftContainer}>
        <h2>Find a Location to get your detail</h2>
        <p>
          Ready to get your car spotless and shiny? Explore all our Locations
          and find yours to learn more or go to our booking page to schedule a
          detail quick and easy!
        </p>
        <div className={styles.buttons}>
          <button
            className={`btn--tertiary btn ${styles.btn}`}
            onClick={() => router.push("/locations")}
          >
            See Locations{" "}
          </button>
        </div>
      </div>
      <div className={styles.LearnRightContainer}>
        <Image
          src={"/images/heroimage.webp"}
          alt="car"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
