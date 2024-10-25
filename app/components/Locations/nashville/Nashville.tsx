import styles from "./Nashville.module.css";

import Services from "../../Services/Services";

export default function Nashville() {
  return (
    <section className={styles.nashvilleSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Nashville</h1>
        <p>
          We service all neighborhoods in Nashville, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      <Services />
    </section>
  );
}
