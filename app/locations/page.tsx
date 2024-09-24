import Locations from "../components/Locations/Locations"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nashville Car Detail Locations - Premium Mobile Auto Detailing",
  description:
    "Discover Nashville Car Detail's mobile auto detailing services available in various locations, including Nashville, Franklin, Brentwood, and more. Find the nearest service to you!",
  keywords:
    "Nashville car detailing locations, mobile auto detailing Nashville, Franklin car detailing, Brentwood car cleaning, Smyrna car detail, Murfreesboro auto detailing",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Nashville Car Detail Locations - Premium Mobile Auto Detailing",
    description:
      "Explore our various mobile auto detailing locations, providing top-notch car detailing services throughout Nashville and surrounding areas. Book your appointment today!",
    type: "website",
    url: "https://www.nashvillecardetailing.com/locations",
    images: "/images/NCDLogoTransBig.png", // Update this to a relevant location image if available
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Nashville Car Detail Locations - Premium Mobile Auto Detailing",
    description:
      "Find out where Nashville Car Detail offers mobile auto detailing services. Check out our locations today!",
    images: "/images/NCDLogoTransBig.png", // Update this to a relevant location image if available
  },
};


export default function LocationsPage() {
    return (
     <Locations/>
    )
}