import { Metadata } from "next";
import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Services.module.css";
import LearnMoreButton from "../Buttons/Learn-More-Button";
import Image from "next/image";




export default function Services() {
    
  return (
    <section className={styles.services_section}>
        <h2 className="h2 txt-center">Our Detailing Services</h2>
        <p className={styles.subheading}>
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

  )

  // return (
  //   <section className={styles.servicesContainer}>
  //     <h1>Our Services</h1>

  //     <div className={styles.fullDetail}>
  //       <h2>Full Detail</h2>
  //       <p>
  //         Our Full Detail package is a top-to-bottom rejuvenation for your
  //         vehicle, addressing both the interior and exterior. We begin with a
  //         comprehensive steam cleaning of the interior, ensuring that your
  //         seats, carpets, and headliner are thoroughly cleaned and deodorized.
  //         We&apos;ll vacuum twice to ensure every corner is spotless, and use
  //         specialized tools to clean and protect all plastic and leather
  //         surfaces. The process also includes cleaning all cracks and crevices,
  //         removing stains, and shampooing carpets and seats for a fresh and
  //         renewed feel. On the exterior, your vehicle will receive a foam bath
  //         and hand wash to remove dirt and grime. We’ll take care of the wheels
  //         and tires, applying tire dressing and removing brake dust, iron
  //         particles, tar, sap, and bugs. We’ll use a clay bar for deep
  //         decontamination and finish with a protective wax that ensures your car
  //         shines for up to 3 months.
  //       </p>
  //       <PrimaryButton params={3}/>
  //       <LearnMoreButton service="full-detail"/>
  //     </div>

  //     <div className={styles.interiorDetail}>
  //       <h2>Interior Detail</h2>
  //       <p>
  //         The Interior Detail service is perfect for anyone who wants a
  //         completely refreshed cabin. We start with a steam clean that
  //         disinfects and removes deep-seated dirt and odors. Every surface
  //         inside your vehicle will be meticulously cleaned and protected, from
  //         the headliner to the carpets. Our double vacuuming process ensures
  //         that even the hardest-to-reach areas are spotless. We clean and
  //         protect your plastics and leather, and give special attention to
  //         cracks, crevices, and hard-to-reach spots. We finish the service with
  //         a deep shampooing of carpets and seats to remove stains, pet hair, and
  //         odors, leaving your vehicle looking and smelling like new. Spotless
  //         windows and an air freshener complete the package, ensuring a fresh
  //         and inviting interior.
  //       </p>
  //       <PrimaryButton params={2}/>
  //       <LearnMoreButton service="interior-detailing"/>
  //     </div>

  //     <div className={styles.exteriorDetail}>
  //       <h2>Exterior Detail</h2>
  //       <p>
  //         Our Exterior Detail package focuses on restoring your vehicle’s outer
  //         surfaces and protecting them from the elements. We start with a
  //         complete exterior foam bath and hand wash, ensuring that all dirt and
  //         grime are removed without damaging the paint. Wheels and tires are
  //         cleaned, with brake dust and iron deposits carefully eliminated. We
  //         apply tire dressing to give your tires a sleek, glossy finish. Tar,
  //         sap, and bug residue are thoroughly removed, and we follow up with a
  //         clay bar treatment to decontaminate the paint surface. To protect your
  //         car, we apply a wax sealant that provides a brilliant shine and
  //         safeguards the paint for up to 3 months.
  //       </p>
  //       <PrimaryButton params={1}/>
  //       <LearnMoreButton service="exterior-detailing"/>
  //     </div>
  //   </section>
  // );
}
