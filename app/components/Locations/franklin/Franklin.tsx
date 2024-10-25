import styles from "./Franklin.module.css";

import Services from "../../Services/Services";

export default function Franklin() {
  return (
    <section className={styles.FranklinSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Franklin</h1>
        <p>
          We service all neighborhoods in Franklin, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      <Services />
    </section>
  );
}
