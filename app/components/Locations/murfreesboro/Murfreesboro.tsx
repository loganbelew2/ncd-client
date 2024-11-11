import styles from "./Murfreesboro.module.css";

import Services from "../../Services/Services";

export default function Murfreesboro() {
  return (
    <section className={styles.MurfreesboroSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Murfreesboro</h1>
        <p>
          We service all neighborhoods in Murfreesboro, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
