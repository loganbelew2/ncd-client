import { Suspense } from "react";
import Booking from "../components/Booking/Booking";

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Booking></Booking>
    </Suspense>
  );
}
