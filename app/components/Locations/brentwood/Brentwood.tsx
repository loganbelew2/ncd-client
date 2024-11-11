import styles from "./Brentwood.module.css";

import Services from "../../Services/Services";

export default function Brentwood() {
  return (
    <section className={styles.BrentwoodSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Brentwood</h1>
        <p>
          We service all neighborhoods in Brentwood, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
