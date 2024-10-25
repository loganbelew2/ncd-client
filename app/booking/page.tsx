import { Suspense } from "react";
import Booking from "../components/Booking/Booking";
import BookingV2 from "../components/Booking/Bookingv2";

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingV2></BookingV2>
    </Suspense>
  );
}
