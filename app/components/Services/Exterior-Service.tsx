import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Exterior-Service.module.css"

export default function ExteriorService() {
  return (
    <section className={styles.exteriorDetailContainer}>
      <h1>Exterior Detailing Service</h1>
      <p>
        At Nashville Car Detail, our Exterior Detailing Service is designed to
        restore your vehicle’s exterior to its original shine and protect it from
        environmental damage. We use the latest techniques and high-quality
        products to ensure that your vehicle’s paint, wheels, and tires are
        cleaned and protected.
      </p>

      <div className={styles.serviceDetails}>
    

        <h2>Why Choose Our Exterior Detailing Service?</h2>
        <p>
          Regular exterior detailing helps protect your vehicle from the
          elements, such as UV rays, dirt, and contaminants that can degrade the
          paint over time. Our service not only makes your car look great but
          also preserves its value and extends the life of your paint job.
        </p>

        <h2>Protect Your Investment</h2>
        <p>
          Your vehicle is one of your most valuable assets. Our Exterior Detailing
          Service provides a comprehensive clean and protection package to
          ensure your car stays looking its best, day in and day out.
        </p>

        <PrimaryButton params={1} />
      </div>
    </section>
  );
}
