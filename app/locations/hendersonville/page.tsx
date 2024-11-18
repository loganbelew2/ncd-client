import Hendersonville from "@/app/components/Locations/hendersonville/Hendersonville";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import Services from "@/app/components/Services/Services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Hendersonville, TN - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Hendersonville, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Hendersonville car detailing, mobile car detailing Hendersonville, auto detailing Hendersonville, car cleaning Hendersonville, car waxing Hendersonville, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Hendersonville - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Hendersonville, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/hendersonville",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Hendersonville - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Hendersonville, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
};

export default function HendersonvillePage() {
  return (
    <>
      <Hendersonville />
      <Services />
      <Process />
      <Packages />
    </>
  );
}
