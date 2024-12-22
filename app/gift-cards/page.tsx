
import { Metadata } from "next";
import GiftCards from "../components/GiftCards/GiftCards";

export const metadata: Metadata = {
  title: "Gift Cards | Nashville Car Detail",
  description:
    "Give the gift of a spotless car! Purchase a Nashville Car Detail gift card for your loved ones. Perfect for any occasion.",
  keywords:
    "Nashville car detailing gift cards, auto detailing gift, car cleaning gift card, car detail present, Nashville auto detail gift cards",
  openGraph: {
    title: "Gift Cards | Nashville Car Detail",
    description:
      "Treat your loved ones to a professional car detailing experience with a Nashville Car Detail gift card. Ideal for any occasion.",
    type: "article",
    url: "https://www.nashvillecardetail.com/gift-cards",
    images: "/images/gift-cards-banner.jpg", // Update this path to an appropriate image for the gift cards page
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Gift Cards | Nashville Car Detail",
    description:
      "Treat your loved ones to a professional car detailing experience with a Nashville Car Detail gift card. Ideal for any occasion.",
    images: "/images/gift-cards-banner.jpg", // Update this path to an appropriate image for the gift cards page
  },
};

export default function GiftCardsPage() {
  return (
    <>
      <GiftCards />
    </>
  );
}
