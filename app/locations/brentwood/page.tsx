import Brentwood from "../../components/Locations/brentwood/Brentwood"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Brentwood - Nashville Car Detail",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Brentwood, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Brentwood car detailing, mobile car detailing Brentwood, auto detailing Brentwood, car cleaning Brentwood, car waxing Brentwood, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Brentwood - Nashville Car Detail",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Brentwood, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/brentwood",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Brentwood - Nashville Car Detail",
    description:
      "Get premium mobile car detailing services in Brentwood, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};


export default function BrentwoodPage() {
    return (
        <Brentwood/>
    )
}