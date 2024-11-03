"use client"
import { useState } from "react"; // Import useState
import Image from "next/image";
import styles from "./Reviews.module.css";

export default function Reviews() {
  // State to track if the full review is shown
  const [isExpanded, setIsExpanded] = useState(false);

  // Sample review text
  const fullReview = "Logan provided impeccable service and treated our older vehicle with the same care and attention as if it were a newer model. The detailing was thorough and professional. He worked so hard to earn our trust. We would highly recommend his detailing service to anyone wanting their car to look brand new again! Thanks, Logan!";
  
  // Truncated version of the review
  const truncatedReview = fullReview.split(" ").slice(0, 20).join(" ") + "...";

  // Toggle the review visibility
  const toggleReview = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.reviewsContainer}>
      <h1 className={styles.title}>
        See what our Satisfied Customers are saying
      </h1>
      <div className={styles.reviewCards}>
        <div className={styles.reviewCard}>
          <div className={styles.google}>
            <Image
              src={"/images/5stars.png"}
              height={30}
              width={100}
              alt="stars"
            />
            <Image
              src={"/images/google.png"}
              height={30}
              width={30}
              alt="google"
            />
          </div>
          <p className={styles.review}>
            {isExpanded ? fullReview : truncatedReview}
            {/* Toggle text based on expanded state */}
            <span onClick={toggleReview} className="font--blue">
              {isExpanded ? " Show less" : " Show more"}
            </span>
          </p>
          <div className={styles.reviewer}>
            <Image 
            src={"/images/review1.png"}
            width={35}
            height={35}
            alt="profile"/>
            <span>Scott Johnson </span>
          </div>
        </div>
      </div>
    </section>
  );
}
