import Reviews from "../components/Reviews/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Nashville Car Detail",
  description:
    "Read real customer reviews for Nashville Car Detail. See why we are the top choice for mobile car detailing services in Nashville, TN. Book your appointment today!",
  keywords:
    "car detailing reviews, mobile car detailing Nashville, auto detailing reviews, Nashville Car Detail feedback, customer testimonials, car cleaning reviews",
  openGraph: {
    title: "Customer Reviews | Nashville Car Detail",
    description:
      "Discover what our customers say about Nashville Car Detail. Check out reviews on our premium mobile detailing services in Nashville, TN.",
    type: "website",
    url: "https://nashvillecardetail.com/reviews",
    images: "/images/reviews.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Customer Reviews | Nashville Car Detail",
    description:
      "See what customers are saying about Nashville Car Detail's top-tier mobile car detailing services.",
    images: "/images/reviews.jpg",
  },
};

export default function ReviewsPage() {
  return <Reviews />;
}
