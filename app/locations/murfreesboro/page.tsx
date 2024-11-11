import Murfreesboro from "@/app/components/Locations/murfreesboro/Murfreesboro";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import Services from "@/app/components/Services/Services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Murfreesboro, TN - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Murfreesboro, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Murfreesboro car detailing, mobile car detailing Murfreesboro, auto detailing Murfreesboro, car cleaning Murfreesboro, car waxing Murfreesboro, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Murfreesboro - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Murfreesboro, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/murfreesboro",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Murfreesboro - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Murfreesboro, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function MurfreesboroPage() {
  return (
    <>
      <Murfreesboro />
      <Services />
      <Process />
      <Packages />
    </>
  );
}
