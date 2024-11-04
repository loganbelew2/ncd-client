"use client";
import { useState } from "react";
import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Packages.module.css"; // Adjust the path as needed

const executivePackages = [
  {
    id: 3,
    title: "Interior Detail",
    description:
      "A comprehensive cleaning of your vehicle’s interior leaving it looking and smelling brand new.",
    price: 159,
    features: [
      "clean headliner",
      "stain removal",
      "steam clean",
      "shampoo / extract mats & seats",
      "double vacuum",
      "clean plastic, vinyl & leather",
      "clean all cracks & crevices",
      "spotless windows",
      "clean doorjambs",
      "wipe down seats",
      "air freshener",
    ],
    hours: "(3 to 4 hours)",
    expressPrice: 119,
    expressFeatures: [
      "vacuum",
      "clean plastic, vinyl & leather",
      "clean all cracks & crevices",
      "spotless windows",
      "clean doorjambs",
      "wipe down seats",
      "air freshener",
    ],
    missingFeatures: [
      "clean headliner",
      "stain removal",
      "steam clean",
      "shampoo / extract mats & seats",
    ],
    expressHours: "(2 to 3 hours)",
  },
  {
    id: 2,
    title: "Full Detail",
    description:
      "Complete detailing service covering both interior and exterior, providing a complete rejuvenation of your vehicle.",
    price: 199,
    features: [
      "clean headliner",
      "stain removal",
      "steam clean",
      "shampoo / extract mats & seats",
      "exterior trim restored and protected",
      "wax paint protection applied (3 months)",
      "double vacuum",
      "clean plastic, vinyl & leather",
      "clean all cracks & crevices",
      "spotless windows",
      "clean doorjambs",
      "wipe down seats",
      "air freshener",
      "exterior foam bath",
      "hand wash",
      "clean wheels wheel wells & tires",
      "dress / shine tires",
      "brake dust, tar & sap removal",
    ],
    hours: "(5 to 6 hours)",
    expressPrice: 139,
    expressFeatures: [
      "vacuum",
      "clean plastic, vinyl & leather",
      "clean all cracks & crevices",
      "spotless windows",
      "clean doorjambs",
      "wipe down seats",
      "air freshener",
      "exterior foam bath",
      "hand wash",
      "clean wheels, wheel wells & tires",
      "dress / shine tires",
      "brake dust, tar & sap removal",
    ],
    missingFeatures: [
      "clean headliner",
      "stain removal",
      "steam clean",
      "shampoo / extract mats & seats",
      "exterior trim restored and protected",
      "wax paint protection applied (3 months)",
    ],
    expressHours: "(3 to 4 hours)",
  },
  {
    id: 1,
    title: "Exterior Detail",
    description:
      "Thorough washing and protection for your vehicle’s exterior surfaces, including paint decon and sealant.",
    price: 119,
    features: [
      "exterior foam bath",
      "hand wash",
      "clean wheels, wheel wells & tires",
      "dress / shine tires",
      "brake dust, tar & sap removal",
      "exterior trim restored and protected",
      "wax paint protection applied (3 months)",
    ],
    hours: "(2 to 3 hours)",
  },
];

export const Packages = () => {
  const [detailToggle, setDetailToggle] = useState({
    interior: false,
    full: false,
  });

  const handleToggle = (id: number) => {
    setDetailToggle((prevToggle) => ({
      ...prevToggle,
      [id === 3 ? "interior" : "full"]:
        !prevToggle[id === 3 ? "interior" : "full"],
    }));
  };

  return (
    <div className={styles.packagesContainer}>
      <div className={styles.header}>
        <h1>Our Detailing Packages</h1>
        <p>
          Choose one of our <span className="font--blue">*Executive*</span>{" "}
          packages for more comprehensive detailing or choose
          <span className="font--blue"> *Express*</span> for more general
          maintenance cleaning
        </p>
      </div>
      <div className={`${styles.cardsContainer} gcardsContainer`}>
        {executivePackages.map((pkg, index) => {
          const isExpress =
            (pkg.id === 3 && detailToggle.interior) ||
            (pkg.id === 2 && detailToggle.full);
          const displayPrice = isExpress
            ? pkg.expressPrice ?? pkg.price
            : pkg.price;
          const displayFeatures = isExpress
            ? pkg.expressFeatures ?? pkg.features
            : pkg.features;
          const displayHours = isExpress
            ? pkg.expressHours ?? pkg.hours
            : pkg.hours;
          const missingFeatures =
            isExpress && pkg.missingFeatures ? pkg.missingFeatures : [];

          return (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index}`]}`}
            >
              <div className={styles.blueBackground}>
                <h2 className={styles.cardTitle}>{pkg.title}</h2>

                {/* Toggle Switch */}
                {(pkg.id === 3 || pkg.id === 2) && (
                  <div className={styles.toggleContainer}>
                    <button
                      onClick={() => handleToggle(pkg.id)}
                      className={!isExpress ? styles.activeToggle : ""}
                    >
                      Executive
                    </button>
                    <button
                      onClick={() => handleToggle(pkg.id)}
                      className={isExpress ? styles.activeToggle : ""}
                    >
                      Express
                    </button>
                  </div>
                )}
                {pkg.id === 1 && <p>Executive - No Express Option</p>}

                <p className={styles.cardPrice}>${displayPrice}</p>
                <p className={styles.noMargin}>price for regular car/sedan</p>
                <p className={styles.variantPricing}>
                  small suv / truck: ${displayPrice + 20}
                </p>
                <p className={styles.variantPricing}>
                  large suv / truck ${displayPrice + 40}
                </p>
                <p>{displayHours}</p>
              </div>
              <div className={styles.cardWrapper}>
                <div className={styles.cardInfoContainer}>
                  <PrimaryButton params={index + 1} />
                </div>

                <ul className={styles.cardFeatures}>
                  {missingFeatures.map((missingFeature, i) => (
                    <li key={`missing-${i}`} className={styles.missingFeature}>
                      {missingFeature}
                    </li>
                  ))}
                  {displayFeatures.map((feature, i) => (
                    <li className={styles.feature} key={i}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
