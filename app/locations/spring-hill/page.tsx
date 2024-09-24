import SpringHill from "@/app/components/Locations/springHill/Spring-Hill";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Spring Hill - Nashville Car Detail",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Spring Hill, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Spring Hill car detailing, mobile car detailing Spring Hill, auto detailing Spring Hill, car cleaning Spring Hill, car waxing Spring Hill, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Mobile Car Detailing in Spring Hill - Nashville Car Detail",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Spring Hill, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetailing.com/locations/spring-hill",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Spring Hill - Nashville Car Detail",
    description:
      "Get premium mobile car detailing services in Spring Hill, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function SpringHillPage() {
    return (
        <SpringHill/>
    )
}