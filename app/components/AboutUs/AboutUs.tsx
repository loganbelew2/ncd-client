import Image from "next/image";
import styles from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <div className={styles.background}>
      <section className={styles.AboutWrapper}>
        <div className={styles.AboutLeftContainer}>
          <h2>About Us</h2>
          <p>
            Welcome to Nashville Car Detail, a locally owned and operated mobile
            car detailing service proudly serving the Nashville area. We bring
            high-quality detailing services right to your doorstep, making it
            convenient to keep your vehicle looking its best. I&apos;m Logan,
            the founder of Nashville Car Detail. As a Nashville native, I
            understand the challenges local weather and driving conditions can
            pose to your vehicle. That&apos;s why we offer personalized,
            professional care—whether it&apos;s exterior detailing, waxing, or
            interior steam cleaning, we treat every car with the same attention
            to detail as if it were our own. At NCD, we&apos;re all about
            delivering excellent results and exceptional customer service. Let
            us bring the shine back to your vehicle!
          </p>
        </div>
        <div className={styles.AboutRightContainer}>
          <Image
            src={"/images/NCD_Logo_White_BG.jpg"}
            width={500}
            height={500}
            alt="Owner of Nashville Car Detail"
          />
        </div>
      </section>
    </div>
  );
}
