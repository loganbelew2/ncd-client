import styles from "./Smyrna.module.css";

import Services from "../../Services/Services";

export default function Smyrna() {
  return (
    <section className={styles.SmyrnaSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Smyrna</h1>
        <p>
          We service all neighborhoods in Smyrna, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      <Services />
    </section>
  );
}
