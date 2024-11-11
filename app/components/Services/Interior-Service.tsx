import styles from "./Interior-Service.module.css";

export default function InteriorService() {
  return (
    <section className={styles.interiorDetailContainer}>
      <div className={styles.interiorHero}>
        <h1 className={styles.heading}>Mobile Vehicle Interior Detailing Near You in Nashville</h1>
        <p className={styles.subheading}>
          Refresh and protect your vehicle&apos;s interior from Nashville&apos;s unpredictable weather with our convenient mobile interior detailing service—right at your doorstep.
        </p>
      </div>
      <section className={styles.cleaningProcessSection}>
        <h2>Our Professional Vehicle Interior Detailing Process</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1</h3>
            <p className={styles.cardDescription}>
              Comprehensive vacuuming of seats, carpets, and floor mats to remove loose dirt, crumbs, and debris.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2</h3>
            <p className={styles.cardDescription}>
              Deep clean and condition leather surfaces, removing dirt and oils to restore softness and protection.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3</h3>
            <p className={styles.cardDescription}>
              Upholstery and carpet deep cleaning with steam or extraction to lift stubborn stains and odors, enhancing your vehicle&apos;s interior appeal.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4</h3>
            <p className={styles.cardDescription}>
              Detail and sanitize dashboard, center console, and all touchpoints for a renewed, grime-free finish.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>5</h3>
            <p className={styles.cardDescription}>
              Streak-free cleaning and protection of interior glass and mirrors for optimal visibility.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>6</h3>
            <p className={styles.cardDescription}>
              Thorough inspection and touch-ups to ensure your vehicle&apos;s interior detailing meets the highest standard.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.serviceDetails}>
        <h2>Why Choose Our Interior Auto Detailing Services Near Nashville?</h2>
        <p>
          Our professional mobile interior detailing service brings deep cleaning, stain removal, and leather conditioning directly to you in Nashville, TN. We focus on every detail to restore your car&apos;s interior, extending its lifespan and enhancing its value. Our interior detailing process makes your vehicle feel like new.
        </p>
        <ul className={styles.whyList}>
          <li>
            <strong>Eliminates Stubborn Stains</strong> Deep interior cleaning lifts tough stains from seats and carpets, giving your car a fresh look.
          </li>
          <li>
            <strong>Neutralizes Odors</strong> Our methods help remove odors, leaving your vehicle&apos;s interior smelling fresh.
          </li>
          <li>
            <strong>Protects Interior Surfaces</strong> Conditioning leather and applying fabric protectants extend the life of seats, dashboards, and touchpoints.
          </li>
          <li>
            <strong>Increases Resale Value</strong> A professionally detailed interior can increase your car&apos;s resale or trade-in value.
          </li>
          <li>
            <strong>Prevents Wear and Tear</strong> Regular detailing helps prevent cracks, fading, and other common issues.
          </li>
          <li>
            <strong>Improves Air Quality</strong> Removing dust, dirt, and allergens creates a healthier in-car environment.
          </li>
          <li>
            <strong>Saves Time</strong> With mobile detailing, you save time and hassle while we handle the job with care.
          </li>
          <li>
            <strong>Enhances Driving Experience</strong> Enjoy a clean, refreshed interior every time you drive.
          </li>
        </ul>
      </div>
    </section>
  );
}
