"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import styles from "./Reviews.module.css";

// Define the props type for ReviewCard
interface ReviewCardProps {
  reviewText: string;
  reviewerName: string;
  reviewerImage: string;
}

// Reusable ReviewCard component
function ReviewCard({
  reviewText,
  reviewerName,
  reviewerImage,
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedReview = reviewText.split(" ").slice(0, 20).join(" ") + "...";

  const toggleReview = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.reviewCard}>   
      <div className={styles.reviewer}>
        <Image src={reviewerImage} width={35} height={35} alt="profile" />
        <span>{reviewerName}</span>
      </div>
      <div className={styles.google}>
        <Image src="/images/5stars.png" height={30} width={100} alt="stars" />
        <Image src="/images/google.png" height={30} width={30} alt="google" />
      </div>
      <p className={styles.review}>
        {isExpanded ? reviewText : truncatedReview}
        <span onClick={toggleReview} className="font--blue">
          {isExpanded ? " Show less" : " Show more"}
        </span>
      </p>
    </div>
  );
}

export default function Reviews() {
  // Array of reviews
  const reviews: ReviewCardProps[] = [
    {
      reviewText:
        "Logan provided impeccable service and treated our older vehicle with the same care and attention as if it were a newer model. The detailing was thorough and professional. He worked so hard to earn our trust. We would highly recommend his detailing service to anyone wanting their car to look brand new again! Thanks, Logan!",
      reviewerName: "Scott Johnson",
      reviewerImage: "/images/review1.png",
    },
    {
      reviewText:
        "Phenomenal attention to detail. My car looks brand new and Logan worked so hard to make it so. Thank you so much Logan!",
      reviewerName: "Heidi Glick",
      reviewerImage: "/images/HeidiReview.png",
    },
    {
      reviewText:
        "Excellent car detail! Service was handled by Logan who was both friendly and professional. Took the time to explain the detailing process and answer questions I had. Couldn't be happier with the results!",
      reviewerName: "zang ell1",
      reviewerImage: "/images/zacharyReview.png",
    },
  ];

  return (
    <section className={styles.reviewsContainer}>
      <h2 className={styles.title}>What Our Customers Are Saying</h2>
      <p className={styles.swipe}>{"< swipe >"}</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        pagination={{ clickable: true }}
        breakpoints={{
          900: {
            slidesPerView: 2, // For tablets and small desktops
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // For larger screens and desktops
            spaceBetween: 30,
          },
        }}
        className={styles.reviewCards}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              reviewText={review.reviewText}
              reviewerName={review.reviewerName}
              reviewerImage={review.reviewerImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
