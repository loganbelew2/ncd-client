import { Metadata } from "next";
import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Services.module.css";
import LearnMoreButton from "../Buttons/Learn-More-Button";


export const metadata: Metadata = {
  title: "Nashville Car Detail - Car Detailing Services in Nashville",
  description: "Explore Nashville Car Detail's premium car detailing services, including Full Detail, Interior Detail, and Exterior Detail. Book now for a fresh and shiny ride!",
  keywords: "Nashville car detailing, car detail services, full car detail, interior car detail, exterior car detail, auto detailing, mobile car detail Nashville",
  openGraph: {
    title: "Nashville Car Detail - Car Detailing Services in Nashville",
    description: "Our professional mobile detailing services cover Full Detail, Interior Detail, and Exterior Detail. Book your car detailing service today.",
    url: "https://nashvillecardetail.com/services",
    type: "website",
    images: [
      {
        url: "https://nashvillecardetail.com/images/car-detailing-services.jpg",
        alt: "Nashville Car Detailing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville Car Detail - Car Detailing Services",
    description: "Get the best mobile car detailing services in Nashville, including Full, Interior, and Exterior Detail packages. Contact us to book today!",
    images: [
      {
        url: "https://nashvillecardetail.com/images/car-detailing-services.jpg",
        alt: "Nashville Car Detailing Services",
      },
    ],
  },
  alternates: {
    canonical: "https://nashvillecardetail.com/services",
  },
};


export default function Services() {
    

  return (
    <section className={styles.servicesContainer}>
      <h1>Our Services</h1>

      <div className={styles.fullDetail}>
        <h2>Full Detail</h2>
        <p>
          Our Full Detail package is a top-to-bottom rejuvenation for your
          vehicle, addressing both the interior and exterior. We begin with a
          comprehensive steam cleaning of the interior, ensuring that your
          seats, carpets, and headliner are thoroughly cleaned and deodorized.
          We&apos;ll vacuum twice to ensure every corner is spotless, and use
          specialized tools to clean and protect all plastic and leather
          surfaces. The process also includes cleaning all cracks and crevices,
          removing stains, and shampooing carpets and seats for a fresh and
          renewed feel. On the exterior, your vehicle will receive a foam bath
          and hand wash to remove dirt and grime. We’ll take care of the wheels
          and tires, applying tire dressing and removing brake dust, iron
          particles, tar, sap, and bugs. We’ll use a clay bar for deep
          decontamination and finish with a protective wax that ensures your car
          shines for up to 3 months.
        </p>
        <PrimaryButton params={3}/>
        <LearnMoreButton service="full-detail"/>
      </div>

      <div className={styles.interiorDetail}>
        <h2>Interior Detail</h2>
        <p>
          The Interior Detail service is perfect for anyone who wants a
          completely refreshed cabin. We start with a steam clean that
          disinfects and removes deep-seated dirt and odors. Every surface
          inside your vehicle will be meticulously cleaned and protected, from
          the headliner to the carpets. Our double vacuuming process ensures
          that even the hardest-to-reach areas are spotless. We clean and
          protect your plastics and leather, and give special attention to
          cracks, crevices, and hard-to-reach spots. We finish the service with
          a deep shampooing of carpets and seats to remove stains, pet hair, and
          odors, leaving your vehicle looking and smelling like new. Spotless
          windows and an air freshener complete the package, ensuring a fresh
          and inviting interior.
        </p>
        <PrimaryButton params={2}/>
        <LearnMoreButton service="interior-detail"/>
      </div>

      <div className={styles.exteriorDetail}>
        <h2>Exterior Detail</h2>
        <p>
          Our Exterior Detail package focuses on restoring your vehicle’s outer
          surfaces and protecting them from the elements. We start with a
          complete exterior foam bath and hand wash, ensuring that all dirt and
          grime are removed without damaging the paint. Wheels and tires are
          cleaned, with brake dust and iron deposits carefully eliminated. We
          apply tire dressing to give your tires a sleek, glossy finish. Tar,
          sap, and bug residue are thoroughly removed, and we follow up with a
          clay bar treatment to decontaminate the paint surface. To protect your
          car, we apply a wax sealant that provides a brilliant shine and
          safeguards the paint for up to 3 months.
        </p>
        <PrimaryButton params={1}/>
        <LearnMoreButton service="exterior-detail"/>
      </div>
    </section>
  );
}
