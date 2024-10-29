
import styles from "./Interior-Service.module.css";

export default function InteriorService() {
  return (
    <section className={styles.interiorDetailContainer}>
      <div className={styles.interiorHero}>
        <h1 className={styles.heading}>Mobile Interior Car Detailing In Nashville</h1>
        <p className={styles.subheading}>
          Refresh and protect the interior of your vehicle from the crazy Tennessee weather without the hassle of leaving your home.
        </p>
      </div>
      <section className={styles.cleaningProcessSection}>
        <h2>Our Interior Cleaning Process</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1</h3>
            <p className={styles.cardDescription}>
              Vacuum seats, carpets, and floor mats to remove loose dirt, crumbs, and debris.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2</h3>
            <p className={styles.cardDescription}>
              Clean and condition all leather surfaces to remove dirt, oils, and restore a soft, supple feel.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3</h3>
            <p className={styles.cardDescription}>
              Deep clean upholstery and carpets using steam or extraction methods to lift stubborn stains and odors.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4</h3>
            <p className={styles.cardDescription}>
              Detail dashboard, center console, and all touchpoints with specialty cleaners to restore shine and remove grime.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>5</h3>
            <p className={styles.cardDescription}>
              Clean and protect interior glass and mirrors for clear visibility and a streak-free finish.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>6</h3>
            <p className={styles.cardDescription}>
              Final Inspection of the vehicle and then touch up any areas overlooked that didn&apos;t get the proper attention.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.serviceDetails}>
        <h2>Why Should I Get My Car&apos;s Interior Detailed?</h2>
        <p>
          Choosing a professional for your car&apos;s interior detailing means a meticulous clean and restoration, extending the life of your car&apos;s interior materials. We focus on the details that matter, from stain removal to conditioning leather, ensuring your car feels like new. Our mobile service brings this premium experience directly to you.
        </p>
        <ul className={styles.whyList}>
          <li>
            <strong>Removes Stubborn Stains</strong> Deep cleaning can remove difficult stains from seats and carpets, enhancing your car&apos;s appearance.
          </li>
          <li>
            <strong>Eliminates Odors</strong> Our process helps neutralize unpleasant smells, leaving your car&apos;s interior fresh and clean.
          </li>
          <li>
            <strong>Protects Interior Materials</strong> Conditioning leather and using fabric protectants keeps your seats, dashboard, and other surfaces in great shape.
          </li>
          <li>
            <strong>Boosts Resale Value</strong> A well-maintained interior can increase the value of your car when it’s time to sell or trade it in.
          </li>
          <li>
            <strong>Prevents Wear and Tear</strong> Regular detailing helps prevent cracks, fading, and other damage to the upholstery and dashboard.
          </li>
          <li>
            <strong>Improves Air Quality</strong> Removing dust, dirt, and allergens from the interior creates a healthier environment inside your car.
          </li>
          <li>
            <strong>Saves Time</strong> Letting a professional handle the deep cleaning allows you to focus on other things while we make your car look and smell amazing.
          </li>
          <li>
            <strong>Makes Driving More Enjoyable</strong> A clean, fresh-smelling interior can improve your overall driving experience.
          </li>
        </ul>
      </div>
     
    </section>
  );
}
