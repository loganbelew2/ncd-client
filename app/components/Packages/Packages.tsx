import styles from './Packages.module.css'; // Adjust the path as needed

const packages = [
  {
    title: 'Interior Detail',
    description: 'A comprehensive cleaning of your vehicle’s interior leaving it looking and smelling brand new.',
    price: '$190',
    features: ['double vacuum', 'interior detail clean', 'shampoo carpets & seats', 'windows clean', 'stain removal']
  },
  {
    title: 'Exterior Detail',
    description: 'Thorough cleaning and protection for your vehicle’s exterior surfaces, including A detailed wash, paint decontamination and sealant.',
    price: '$190',
    features: ['exterior foam bath', 'hand wash', 'wheel & tire clean' ,'clay bar decontamination', 'tires dressed', 'Sealant protection applied']
  },
  {
    title: 'Full Detail',
    description: 'Complete detailing service covering both interior and exterior, providing a complete rejuvenation of your vehicle.',
    price: '$249',
    features: ['double vacuum', 'interior detail clean', 'shampoo carpets & seats', 'windows clean', 'stain removal', 'exterior foam bath', 'hand wash', 'wheel & tire clean' ,'clay bar decontamination', 'tires dressed', 'Sealant protection applied']
  }
];


export const Packages = () => {
  return (
    <div className={styles.packagesContainer}>
      <div className={styles.header}>
        <h1>Our Detailing Packages</h1>
        <p>Choose from our selection of detailing packages designed to meet your needs and budget.</p>
      </div>
      <div className={styles.cardsContainer}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{pkg.title}</h2>
            <p className={styles.cardDescription}>{pkg.description}</p>
            <p className={styles.cardPrice}>{pkg.price}</p>
            <ul className={styles.cardFeatures}>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={`btn--primary ${styles.btn}`}>Book now</button>
          </div>
        ))}
      </div>
    </div>
  );
};


