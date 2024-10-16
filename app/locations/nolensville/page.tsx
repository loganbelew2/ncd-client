import Nolensville from "@/app/components/Locations/nolensville/Nolensville";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Nolensville - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Nolensville, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Nolensville car detailing, mobile car detailing Nolensville, auto detailing Nolensville, car cleaning Nolensville, car waxing Nolensville, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Nolensville - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Nolensville, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/nolensville",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Nolensville - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Nolensville, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function NolensvillePage() {
    return (
        <Nolensville/>
    )
}