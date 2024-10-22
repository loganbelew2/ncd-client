
import styles from "./Exterior-Service.module.css";

export default function ExteriorService() {
  return (
    <section className={styles.exteriorDetailContainer}>
      <div className={styles.exteriorHero}>
        <h1>Mobile Car Wash and Wax In Nashville</h1>
        <p className="subheading">
          Protect your car&apos;s paint from the crazy Tennessee weather and
          turn heads all without leaving your house.
        </p>
      </div>
      <section className={styles.washAndWaxProcessSection}>
        <h2 className={styles.heading}>Our Wash and Wax Process</h2>
        <p className={styles.subheading}>
          Our detailed process ensures that every part of your vehicle gets the
          attention it deserves, leaving your car clean, shiny, and protected.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1</h3>
            <p className={styles.cardDescription}>
              Clean tires, wheels and wheel wells with dedicated wheel and tire
              cleaner and brushes to get the job done.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2</h3>
            <p className={styles.cardDescription}>
              pre rinse then foam up the entire vehicle with snow foam and let
              the soap lift and encapsulate the dirt to prevent scratching in
              hand wash.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3</h3>
            <p className={styles.cardDescription}>
              identify extra dirty areas on the exterior such as bottom panels
              and front grill and use bug & tar remover as well as iron remover
              where needed.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4</h3>
            <p className={styles.cardDescription}>
              Thorough hand wash of vehicle using wash mit and micro fiber
              towels with either a ph neutral soap or a no rinse solution.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>5</h3>
            <p className={styles.cardDescription}>
              Apply wax to the entire vehicle to protect the paint from future
              bird droppings, tree sap and tar, iron particles etc.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>6</h3>
            <p className={styles.cardDescription}>
              Dress tires to make them shine and clean exterior car class to
              make it crystal clear.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.serviceDetails}>
        <h2>Why Should I Get My Car Washed and Waxed?</h2>
        <p>
          Choosing a professional detailer for your car&apos;s wash and wax ensures
          expert care and lasting protection. We use the right techniques and
          products to safely remove dirt and contaminants, while professional
          waxing adds shine and shields your paint from weather and UV rays.
          With our mobile service, you get this quality care conveniently at
          your doorstep.
        </p>
        <ul className={styles.whyList}>
          <li>
            <strong>Protects Paint from Damage</strong> Regular washing and
            waxing create a protective barrier against dirt, bird droppings,
            tree sap, and other contaminants that can damage your car&apos;s paint.
          </li>
          <li>
            <strong>Prevents Rust and Corrosion</strong> Removing dirt, salt,
            and moisture through washing helps prevent rust, especially in
            hidden areas, while waxing provides an added layer of protection
            against moisture.
          </li>
          <li>
            <strong>Enhances Shine and Appearance</strong> Waxing restores your
            car&apos;s glossy finish, giving it a like-new shine that enhances its
            overall appearance.
          </li>
          <li>
            <strong>Easier Future Cleaning</strong> A waxed surface is smoother,
            allowing dirt and water to slide off more easily, which makes future
            washes quicker and more effective.
          </li>
          <li>
            <strong>Extends the Life of Your Paint</strong> By reducing exposure
            to the sun&apos;s UV rays and environmental pollutants, waxing extends
            the life of your car&apos;s paint, helping it retain its value.
          </li>
          <li>
            <strong>Boosts Resale Value</strong> A well-maintained exterior with
            regular washing and waxing can significantly increase the resale
            value of your car by keeping it looking newer for longer.
          </li>
          <li>
            <strong>Saves Money in the Long Run</strong> Investing in regular
            wash and wax services can save you money over time by reducing the
            need for costly paint repairs and repainting.
          </li>
          <li>
            <strong>
              Improves Fuel Efficiency (Okay maybe we are stretching it here :){" "}
            </strong>{" "}
            A clean, waxed car surface is more aerodynamic, which can slightly
            improve fuel efficiency by reducing drag.
          </li>
        </ul>
      </div>
      
    </section>
  );
}
