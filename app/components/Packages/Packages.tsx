import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Packages.module.css"; // Adjust the path as needed

const packages = [
  {
    id: 3,
    title: "Interior Detail",
    description:
      "A comprehensive cleaning of your vehicle’s interior leaving it looking and smelling brand new.",
    price: "$99",
    features: [
      "steam clean",
      "clean headliner",
      "double vacuum",
      "clean and protect plastic & leather",
      "clean all cracks & crevices",
      "shampoo carpets & seats",
      "spotless windows",
      "stain removal",
      "pet hair removal",
      "air freshener",
    ],
  },
  {
    id: 2,
    title: "Full Detail",
    description:
      "Complete detailing service covering both interior and exterior, providing a complete rejuvenation of your vehicle.",
    price: "$129",
    features: [
      "steam clean",
      "clean headliner",
      "double vacuum",
      "clean and protect plastic & leather",
      "clean all cracks & crevices",
      "shampoo carpets & seats",
      "spotless windows",
      "stain removal",
      "pet hair removal",
      "air freshener",
      "exterior foam bath",
      "hand wash",
      "clean wheels & tires",
      "dress tires",
      "brake dust/iron removal",
      "tar, sap, bug removal",
      "wax protection applied (3 months)",
    ],
  },
  {
    id: 1,
    title: "Exterior Detail",
    description:
      "Thorough washing and protection for your vehicle’s exterior surfaces, including paint decon and sealant.",
    price: "$70",
    features: [
      "exterior foam bath",
      "hand wash",
      "clean wheels & tires",
      "dress tires",
      "brake dust/iron removal",
      "tar, sap, bug removal",
      "wax protection applied (1 month)",
    ],
  },
];

export const Packages = () => {
  return (
    <div className={styles.packagesContainer}>
      <div className={styles.header}>
        <h1>Our Detailing Packages</h1>
        <p>
          Choose from our selection of detailing packages designed to meet your
          needs and budget.
        </p>
      </div>
      <div className={`${styles.cardsContainer} gcardsContainer`}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`card${index}`]}`}
          >
            <div className={styles.blueBackground}>
              <h2 className={styles.cardTitle}>{pkg.title}</h2>
              {/* <h3></h3> */}
              <p className={styles.cardPrice}>{pkg.price}</p>
            </div>
            <div className={styles.cardWrapper}>
              <div className={styles.cardInfoContainer}>
                <p className={styles.cardDescription}>{pkg.description}</p>
                <PrimaryButton params={index + 1} />
              </div>

              <ul className={styles.cardFeatures}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
