import Locations from "../components/Locations/Locations"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nashville Car Detail Locations - Mobile Auto Detailing in Middle Tennessee",
  description:
    "Discover Nashville Car Detail's mobile auto detailing services available in Middle Tennessee, including Nashville, Rutherford County, Williamson County, and more. Find the nearest service to you!",
  keywords:
    "Nashville car detailing locations, mobile auto detailing Nashville, Franklin car detailing, Brentwood car cleaning, Smyrna car detail, Murfreesboro auto detailing",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Nashville Car Detail Locations - Premium Mobile Auto Detailing",
    description:
      "Explore our various mobile auto detailing locations, providing top-notch car detailing services throughout Nashville and surrounding areas. Book your appointment today!",
    type: "website",
    url: "https://nashvillecardetail.com/locations",
    images: "/images/NCD_Logo_White_BG.jpg", 
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Nashville Car Detail Locations - Premium Mobile Auto Detailing",
    description:
      "Find out where Nashville Car Detail offers mobile auto detailing services. Check out our locations today!",
    images: "/images/NCD_Logo_White_BG.jpg", 
  },
};


export default function LocationsPage() {
    return (
     <Locations/>
    )
}