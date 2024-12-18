import { Suspense } from "react";
import BookingV2 from "../components/Booking/Bookingv2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Mobile Car Detailing Appointment | Nashville Car Detail",
  description:
    "Easily book your mobile car detailing service with Nashville Car Detail. Schedule your appointment for interior, exterior, or full detailing today!",
  keywords:
    "mobile car detailing booking, book car detailing Nashville, auto detailing appointment, schedule car wash Nashville, mobile detailing service",
  openGraph: {
    title: "Book Your Mobile Car Detailing Appointment | Nashville Car Detail",
    description:
      "Book your next mobile car detailing appointment in Nashville. Choose from interior, exterior, or full detailing services.",
    type: "website",
    url: "https://www.nashvillecardetail.com/booking",
    images: "/images/booking.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Book Your Mobile Car Detailing Appointment | Nashville Car Detail",
    description:
      "Book your car detailing appointment with Nashville Car Detail today and enjoy top-quality service at your doorstep.",
    images: "/images/booking.jpg",
  },
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingV2></BookingV2>
    </Suspense>
  );
}
