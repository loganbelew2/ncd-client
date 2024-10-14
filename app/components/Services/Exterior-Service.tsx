import PrimaryButton from "../Buttons/Primary-Button";
import styles from "./Exterior-Service.module.css";

export default function ExteriorService() {
  return (
    <section className={styles.exteriorDetailContainer}>
      <h1>Exterior Detailing Service</h1>
      <p>
        At Nashville Car Detail, our Exterior Detailing Service is designed to
        restore your vehicle’s exterior to its original shine and protect it
        from environmental damage. We use the latest techniques and high-quality
        products to ensure that your vehicle’s paint, wheels, and tires are
        cleaned and protected.
      </p>

      <div className={styles.serviceDetails}>
        <h2>Why Should I Get My Car Washed and Waxed?</h2>
        <p>
          Choosing a professional detailer for your car's wash and wax goes
          beyond just making it look good—it’s about protection and care. A
          detailer understands the best techniques and products to give your car
          a deep clean, safely removing dirt, grime, and contaminants without
          harming the paint. Professional waxing not only makes your car shine
          but also adds a layer of protection against harsh weather and UV rays,
          keeping your car looking newer for longer. Plus, with a mobile service
          like ours, you get this expert care at your convenience, right at your
          doorstep.
        </p>

        <h2>Protect Your Investment</h2>
        <p>
          Our Exterior Detail package focuses on restoring your vehicle’s outer
          surfaces and protecting them from the elements. We start with a
          complete exterior foam bath and hand wash, ensuring that all dirt and
          grime are removed without damaging the paint. Wheels and tires are
          cleaned, with brake dust and iron deposits carefully eliminated. We
          apply tire dressing to give your tires a sleek, glossy finish. Tar,
          sap, and bug residue are thoroughly removed. To protect your car, we
          apply a wax sealant that provides a brilliant shine and safeguards the
          paint for up to 3 months.
        </p>

        <PrimaryButton params={1} />
      </div>
    </section>
  );
}
