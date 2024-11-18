import { Metadata } from "next";
import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Services.module.css";
import LearnMoreButton from "../Buttons/Learn-More-Button";
import Image from "next/image";

export default function Services() {
  return (
    <div className={styles.background}>
      <section className={styles.services_section}>
        <h2 className="h2 txt-center">Our 3 Detailing Services</h2>
        <p className={`${styles.subheading} txt-center `}>
          Affordable cost - Professional quality - Great value
        </p>
        <div className={`${styles.services_exterior} ${styles.first_service}`}>
          <div className={styles.services_exterior_left}>
            <h3 className="h3">
              Exterior detail | <span className="font--blue">Wash & Wax</span>
            </h3>
            <p>
              When you book an exterior detailing service at Nashville Car
              Detail you will be investing in your car&apos;s appearance and
              protecting your vehicle from the elements. We will thoroughly hand
              wash the whole vehicle and hand wax the paint to protect it.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={1} />
              <LearnMoreButton service="exterior-detailing" />
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
            <h3 className="h3">
              Interior detail | <span className="font--blue">Deep Clean</span>
            </h3>
            <p>
              We meticulously clean every surface, from deep vacuuming
              the carpets to conditioning the seats, leaving the interior
              spotless and refreshed. Our service will help protect your car’s
              interior materials, enhance comfort, and create a fresh
              environment for every drive.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={2} />
              <LearnMoreButton service="interior-detailing" />
            </div>
          </div>
        </div>
        <div className={`${styles.services_exterior} ${styles.third_service}`}>
          <div className={styles.services_exterior_left}>
            <h3 className="h3">
              Full detail | <span className="font--blue">Inside & Out</span>
            </h3>
            <p>
              We provide a thorough exterior hand wash, wax, and
              paint protection, paired with a deep interior clean, including
              carpet & upholstery shampoo. This service is designed
              to give your car a renewed look and feel, maximizing its
              appearance, comfort, and protection in one complete package.
            </p>
            <div className={styles.buttons}>
              <PrimaryButton params={3} />
              <LearnMoreButton service="full-detailing" />
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
    </div>
  );
}
