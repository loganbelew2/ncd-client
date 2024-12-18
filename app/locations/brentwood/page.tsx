import Services from "@/app/components/Services/Services";
import Brentwood from "../../components/Locations/brentwood/Brentwood"

import type { Metadata } from "next";
import Process from "@/app/components/Process/Process";
import { Packages } from "@/app/components/Packages/Packages";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Brentwood, TN - auto detailing near me",
  description:
    "Nashville Car Detail offers premium mobile car detailing services in Brentwood, TN. Experience top-tier car care with our expert team, available at your location. Book your appointment today!",
  keywords:
    "Brentwood car detailing, mobile car detailing Brentwood, auto detailing Brentwood, car cleaning Brentwood, car waxing Brentwood, Nashville Car Detail, premium car care",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing in Brentwood - auto detailing near me",
    description:
      "Nashville Car Detail provides high-quality mobile car detailing services in Brentwood, TN. Contact us to schedule your detailing service and experience unparalleled car care.",
    type: "website",
    url: "https://www.nashvillecardetail.com/locations/brentwood",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing in Brentwood - auto detailing near me",
    description:
      "Get premium mobile car detailing services in Brentwood, TN, from Nashville Car Detail. Book now for top-notch car care!",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
};


export default function BrentwoodPage() {
    return (
      <>
      <Head>
        <link
          rel="canonical"
          href="https://www.nashvillecardetail.com"
        />
      </Head>
      <Brentwood />
      <Services />
      <Process />
      <Packages />
    </>
    )
}