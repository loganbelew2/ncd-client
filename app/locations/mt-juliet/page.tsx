import MtJuliet from "@/app/components/Locations/mtJuliet/Mt-Juliet";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Mt. Juliet - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Mt. Juliet, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Mt. Juliet car detailing, mobile car detailing Mt. Juliet, auto detailing Mt. Juliet, car cleaning Mt. Juliet, car waxing Mt. Juliet, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Mt. Juliet - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Mt. Juliet, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/mt-juliet",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Mt. Juliet - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Mt. Juliet, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function MtJulietPage() {
    return (
        <MtJuliet/>
    )
}