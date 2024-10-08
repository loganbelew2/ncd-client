import Franklin from "@/app/components/Locations/franklin/Franklin";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Franklin - Nashville Car Detail",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Franklin, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Franklin car detailing, mobile car detailing Franklin, auto detailing Franklin, car cleaning Franklin, car waxing Franklin, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Franklin - Nashville Car Detail",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Franklin, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/franklin",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Franklin - Nashville Car Detail",
    description:
      "Get premium mobile car detailing services in Franklin, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function FranklinPage() {
    return (
        <Franklin/>
    )
}