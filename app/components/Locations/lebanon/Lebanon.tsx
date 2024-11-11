import styles from "./Lebanon.module.css";

import Services from "../../Services/Services";

export default function Lebanon() {
  return (
    <section className={styles.LebanonSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Lebanon</h1>
        <p>
          We service all neighborhoods in Lebanon, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
