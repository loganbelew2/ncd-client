"use client";
import styles from "./Locations.module.css";
import { useRouter } from "next/navigation";
export default function Locations() {
const router = useRouter();

const locations = [
  "Nashville",
  "Franklin",
  "Brentwood",
  "Hendersonville",
  "Gallatin",
  "Lebanon",
  "Spring Hill",
  "Murfreesboro",
  "Smyrna",
  "Mt. Juliet"
];

const handleCardClick = (locationIndex: number) => {
  let location = locations[locationIndex].toLowerCase();
  if (locations[locationIndex] == "Spring Hill" ) router.push(`/locations/spring-hill`)
  else if (locations[locationIndex] == "Mt. Juliet") router.push(`/locations/mt-juliet`)
  else router.push(`/locations/${location}`);
}
  return (
    <section className={styles.locationsSection}>
      <div className={styles.header}>
        <h1>Service Areas</h1>
        <p>We proudly serve the following areas across the Nashville region.</p>
      </div>

      <div className={styles.locationsGrid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationCard} onClick={() => handleCardClick(index)}>
            <h2>{location}</h2>
            <p>Professional mobile car detailing in {location}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
