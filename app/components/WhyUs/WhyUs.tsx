import Image from "next/image";
import styles from "./WhyUs.module.css";
export default function WhyUs() {
  return (
    <section className={styles.WhyUsWrapper}>
      <h2>Why Choose Us</h2>
      <div className={styles.BenefitsContainer}>
        <div>
          <h3>Highly Rated</h3>
          <Image
            src={"/images/finalrating.png"}
            alt="car icon"
            height={180}
            width={180}
          />
        </div>
        <div>
          <h3>Convenient</h3>
          <Image
            src={"/images/mobile.png"}
            alt="car icon"
            height={150}
            width={150}
          />
        </div>
        <div>
          <h3>Excellent Results</h3>
          <Image
            src={"/images/excellent.png"}
            alt="car icon"
            height={150}
            width={150}
          />
        </div>
      </div>
    </section>
  );
}
