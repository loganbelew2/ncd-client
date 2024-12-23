"use client";
import { useState } from "react";
import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Packages.module.css"; // Adjust the path as needed
import Image from "next/image";

const executivePackages = [
  {
    id: 3,
    title: "Interior Detail - ",
    description:
      "Ideal for vehicles that need a real deep clean and have some staining : A comprehensive cleaning of your vehicle’s interior leaving it looking and smelling brand new.",
    price: 179,
    features: [
      "stain removal",
      "steam clean",
      "shampoo/extract fabric mats & seats",
      "double vacuum",
      "clean all surfaces, plastic, vinyl & leather",
      "clean nooks & crannies",
      "spotless windows",
      "clean doorjambs",
      "air freshener",
    ],
    hours: "(3 to 4 hours)",
    type: "Interior",
    tier: "Deep Clean",
    image: "/images/steam-clean.webp",
  },
  {
    id: 2,
    title: "Full Detail - ",
    description:
      "Our most popular package, bringing both our Executive packages into one at a slight discount, providing a complete rejuvenation of your vehicle.",
    price: 279,
    features: {
      interior: [
        "stain removal",
        "steam clean",
        "shampoo / extract mats & seats",
        "double vacuum",
        "clean all surfaces, plastic, vinyl & leather",
        "spotless windows",
        "clean doorjambs",
        "air freshener",
      ],
      exterior: [
        "exterior foam bath",
        "hand wash",
        "clean wheels, wheel wells & tires",
        "dress / shine tires",
        "brake dust, tar, bug & sap removal",
        "wax paint protection applied (3 months)",
      ],
    },
    hours: "(5 to 6 hours)",
    type: "Full",
    tier: "Inside & Out",
    image: "/images/express-exterior.jpg",
  },
  {
    id: 1,
    title: "Exterior Detail - ",
    description:
      "Thorough washing and protection for your vehicle’s exterior surfaces, including tire shine and paint waxing.",
    price: 119,
    features: [
      "exterior foam bath",
      "hand wash",
      "clean wheels, wheel wells & tires",
      "dress / shine tires",
      "brake dust, tar, bug & sap removal",
      "wax paint protection applied (3 months)",
    ],
    hours: "(2 to 2.5 hours)",
    type: "Exterior",
    tier: "Wash & Wax",
    image: "/images/Car-Exterior-Detailing.jpg",
  },
];
// Type guard function to check if features has interior and exterior properties
const isFullDetailFeatures = (
  features: any
): features is { interior: string[]; exterior: string[] } => {
  return (
    features &&
    typeof features === "object" &&
    "interior" in features &&
    "exterior" in features
  );
};
export const Packages = () => {
  const [selectedType, setSelectedType] = useState("Interior");

  const filteredPackages = executivePackages.filter(
    (pkg) => pkg.type === selectedType
  );

  return (
    <div className={styles.packagesContainer}>
      <div className={styles.header}>
        <h2>Our Detailing Packages</h2>
        <p>
          Get <span className="font--blue">10% </span>off full price when
          booking multiple vehicles
        </p>
      </div>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${
            selectedType === "Interior" ? styles.active : ""
          }`}
          onClick={() => setSelectedType("Interior")}
        >
          Interior Only
        </button>
        <button
          className={`${styles.toggleButton} ${
            selectedType === "Full" ? styles.active : ""
          }`}
          onClick={() => setSelectedType("Full")}
        >
          Full Detail
        </button>
        <button
          className={`${styles.toggleButton} ${
            selectedType === "Exterior" ? styles.active : ""
          }`}
          onClick={() => setSelectedType("Exterior")}
        >
          Exterior Only
        </button>
      </div>
      <div className={`${styles.cardsContainer} gcardsContainer`}>
        {filteredPackages.map((pkg, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`card${index}`]}`}
          >
            <div className={styles.blueBackground}>
              <h2 className={styles.cardTitle}>
                {pkg.title} <span className="font--blue">{pkg.tier}</span>
              </h2>
              <p className={styles.cardPrice}>${pkg.price}*</p>
              <p>{pkg.hours}</p>
            </div>
            <div className={styles.image}>
              <Image
                src={pkg.image}
                layout="responsive"
                width={1}
                height={1}
                alt="exterior"
              />
            </div>
            <div className={styles.cardWrapper}>
              <p>{pkg.description}</p>
              <ul className={styles.cardFeatures}>
                {isFullDetailFeatures(pkg.features) ? (
                  <>
                    <h3>Interior Features</h3>
                    {pkg.features.interior.map((feature, i) => (
                      <li className={styles.feature} key={`interior-${i}`}>
                        {feature}
                      </li>
                    ))}
                    <h3>Exterior Features</h3>
                    {pkg.features.exterior.map((feature, i) => (
                      <li className={styles.feature} key={`exterior-${i}`}>
                        {feature}
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    <h3>Features</h3>
                    {pkg.features.map((feature, i) => (
                      <li className={styles.feature} key={i}>
                        {feature}
                      </li>
                    ))}
                  </>
                )}
              </ul>
              <div className={styles.cardInfoContainer}>
                <PrimaryButton params={index + 1} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add-Ons Section */}
      <div className={styles.addOnsSection}>
        <h3>Popular Add-Ons</h3>
        <div className={styles.addOnsContainer}>
          <div className={styles.addOn}>
            <h4>Pet Hair Removal</h4>
            <p>$30</p>
          </div>
          <div className={styles.addOn}>
            <h4>Clean Headliner</h4>
            <p>$30</p>
          </div>
          <div className={styles.addOn}>
            <h4>Headlight Restoration</h4>
            <p>$70</p>
          </div>
          <div className={styles.addOn}>
            <h4>Engine Bay Cleaning</h4>
            <p>$40</p>
          </div>
          <div className={styles.addOn}>
            <h4>Exterior Trim Restoration / Faded Plastic</h4>
            <p>$30</p>
          </div>
        </div>
      </div>
    </div>
  );
};
