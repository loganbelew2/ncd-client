import styles from "./Hendersonville.module.css";

import Services from "../../Services/Services";

export default function Hendersonville() {
  return (
    <section className={styles.HendersonvilleSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Premium Mobile Car Detailing Services in Hendersonville</h1>
        <p>
          We service all neighborhoods in Hendersonville, TN and will drive to your
          driveway to give your car the clean it deserves!
        </p>
      </div>
      
    </section>
  );
}
