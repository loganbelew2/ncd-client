import styles from "./MtJuliet.module.css";

import Services from "../../Services/Services";

export default function MtJuliet() {
  return (
    <section className={styles.MtJulietSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Mt. Juliet</h1>
        <p>
          We service all neighborhoods in Mt. Juliet, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
