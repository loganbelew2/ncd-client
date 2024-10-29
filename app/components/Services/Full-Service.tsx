
import styles from "./Full-Service.module.css";

export default function FullService() {
  return (
    <section className={styles.fullDetailContainer}>
      <div className={styles.fullDetailHero}>
        <h1 className={styles.heading}>Complete Mobile Car Detailing in Nashville</h1>
        <p className={styles.subheading}>
          Transform your vehicle with our comprehensive full detail service, 
          ensuring every inch of your car is meticulously cleaned and protected.
        </p>
      </div>
      <section className={styles.fullDetailProcessSection}>
        <h2 >Our Full Detail Process</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1</h3>
            <p className={styles.cardDescription}>
              Begin with a comprehensive exterior wash, including wheels, tires, and wheel wells.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2</h3>
            <p className={styles.cardDescription}>
              Follow up with a thorough hand wash with bug, tar and iron removal.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3</h3>
            <p className={styles.cardDescription}>
              Apply wax or sealant for long-lasting protection and shine.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4</h3>
            <p className={styles.cardDescription}>
              Deep clean the interior, including vacuuming, shampooing upholstery, and treating leather.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>5</h3>
            <p className={styles.cardDescription}>
              Condition all surfaces, ensuring a fresh and protected interior environment.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>6</h3>
            <p className={styles.cardDescription}>
              Finalize with a complete glass cleaning for crystal-clear visibility.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.serviceDetails}>
        <h2>Why Choose Our Full Detailing Service?</h2>
        <p>
          Our full detailing service ensures that every aspect of your vehicle receives 
          expert attention. From deep cleaning to protective coatings, we restore your car&apos;s 
          beauty and prolong its life. Enjoy a pristine interior and exterior with our mobile 
          service at your convenience.
        </p>
        <ul className={styles.whyList}>
          <li>
            <strong>Complete Restoration:</strong> Every part of your vehicle is meticulously 
            cleaned, revitalizing its appearance and protecting its value.
          </li>
          <li>
            <strong>Enhanced Comfort:</strong> A clean interior creates a more enjoyable driving 
            experience for you and your passengers.
          </li>
          <li>
            <strong>Protection Against Elements:</strong> Our services shield your car from 
            dirt, grime, and harmful UV rays.
          </li>
          <li>
            <strong>Improved Resale Value:</strong> Regular detailing helps maintain and enhance 
            your vehicle&apos;s resale value.
          </li>
          <li>
            <strong>Convenience:</strong> Our mobile service brings expert detailing right to your door.
          </li>
          <li>
            <strong>Comprehensive Service:</strong> We cover every inch of your vehicle, inside 
            and out, ensuring no detail is overlooked.
          </li>
          <li>
            <strong>Flexible Options:</strong> Choose from various detailing packages tailored to 
            your needs and preferences.
          </li>
        </ul>
      </div>
     
    </section>
  );
}
