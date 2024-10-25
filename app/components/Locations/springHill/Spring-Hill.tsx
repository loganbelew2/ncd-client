import styles from "./SpringHill.module.css";

import Services from "../../Services/Services";

export default function SpringHill() {
  return (
    <section className={styles.SpringHillSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in SpringHill</h1>
        <p>
          We service all neighborhoods in SpringHill, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      <Services />
    </section>
  );
}
