import Image from "next/image";
import styles from "./Home.module.css";
import PrimaryButton from "../Buttons/Primary-Button";

export default function Home() {
  return (
    <>
      <section className={styles.hero__container}>
        <div className={styles.hero__container__left}>
          <h1 className={styles.title}>
            Unmatched mobile auto detailing around Nashville
          </h1>
          <p className={styles.subheading}>
            Experience the convenience of our mobile detailing service, designed
            to fit seamlessly into your schedule with clear and honest pricing. We operate in surrounding Nashville areas.
            Wherever you park, we&apos;ll leave no mark!
          </p>
          <PrimaryButton />
        </div>

        <div className={styles.hero__container__right}>
          <Image
            src={
              "/images/NCD.WEBP"
            }
            alt="car"
            className={styles.image}
            layout="responsive"
            width={1}
            height={1}
          ></Image>
        </div>
      </section>
      <section className={styles.section_two}>
        <h2>hey there</h2>
        <form action="https://squareup.com/outreach/Ngj1hd/subscribe" method="POST" target="_blank"><input type="email" name="email_address" placeholder="Your Email Address" /><input type="hidden" name="embed" value="true"/><button type="submit" >Join Now</button></form>
      </section>
    </>
  );
}
