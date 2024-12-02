"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Reviews.module.css";

interface ReviewCardProps {
  reviewText: string;
  reviewerName: string;
  reviewerImage: string;
}

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
    {
      reviewText:
        "Logan detailed two of my cars and made them look better than they've ever looked on the inside and out. He made our work vehicle look better than it did when we bought it! Would highly recommend him!",
      reviewerName: "Michaela Calotta",
      reviewerImage: "/images/miaReview.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.reviewsContainer}>
      <h2 className={styles.title}>What Our Customers Are Saying</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={isMobile} // Only enable navigation on mobile
        breakpoints={{
          800: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1300: {
            slidesPerView: 4,
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
