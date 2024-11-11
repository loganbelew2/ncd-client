import styles from "./Gallatin.module.css";

import Services from "../../Services/Services";

export default function Gallatin() {
  return (
    <section className={styles.GallatinSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Gallatin</h1>
        <p>
          We service all neighborhoods in Gallatin, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
