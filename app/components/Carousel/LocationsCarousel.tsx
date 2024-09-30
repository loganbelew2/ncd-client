"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import "swiper/swiper-bundle.css";
import styles from "./LocationsCarousel.module.css";
import { useRouter } from "next/navigation";
export default function LocationsCarousel() {
  const router = useRouter();
  const locations = [
    "Nashville",
    "Franklin",
    "Brentwood",
    "Nolensville",
    "Spring Hill",
    "Murfreesboro",
    "Smyrna",
    "Mt. Juliet",
  ];

  function handleSlideClick(locationIndex: number) {
    let location = locations[locationIndex].toLowerCase();
    if (locations[locationIndex] == "Spring Hill")
      router.push(`/locations/spring-hill`);
    else if (locations[locationIndex] == "Mt. Juliet")
      router.push(`/locations/mt-juliet`);
    else router.push(`/locations/${location}`);
  }

  return (
    <section className={styles.carouselContainer}>
      <h2>Service Areas</h2>
      <Swiper
        className={styles.swiper}
        spaceBetween={30}
        slidesPerView={3}
        navigation={true} // Enable navigation
        loop={true} // Enable loop to go from first to last
        autoplay={{
          // Enable autoplay
          delay: 2000, // Delay between automatic scroll (3000ms = 3 seconds)
          disableOnInteraction: false, // Autoplay should not stop when user interacts with it
        }}
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {locations.map((location, index) => (
          <SwiperSlide key={index} className={styles.slides}>
            <div
              onClick={() => handleSlideClick(index)}
              className={`${styles.locationSlide} ${
                styles[`location${index}`]
              }`}
            >
              <h3>{location}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
