import Gallatin from "@/app/components/Locations/gallatin/Gallatin";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import Services from "@/app/components/Services/Services";

import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Gallatin, TN - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Gallatin, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Gallatin car detailing, mobile car detailing Gallatin, auto detailing Gallatin, car cleaning Gallatin, car waxing Gallatin, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Gallatin - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Gallatin, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://nashvillecardetail.com/locations/gallatin",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Gallatin - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Gallatin, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
};

export default function GallatinPage() {
  return (
    <>
    <Head>
        <link
          rel="canonical"
          href="https://nashvillecardetail.com"
        />
      </Head>
      <Gallatin />
      <Services />
      <Process />
      <Packages />
    </>
  );
}
