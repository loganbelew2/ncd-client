import {Packages} from "../components/Packages/Packages"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detailing Packages | Nashville Car Detail",
  description: "Explore Nashville Car Detail’s range of detailing packages. From interior to exterior to full-service packages, find the perfect option for your vehicle.",
  keywords: "Nashville car detailing packages, auto detailing services, interior detailing, exterior detailing, full detail package",
  openGraph: {
    title: "Detailing Packages | Nashville Car Detail",
    description: "Explore our detailing packages to find the perfect service for your vehicle. Interior, exterior, and full detailing options available.",
    type: "article",
    url: "https://www.nashvillecardetail.com/packages",
    images: "/images/packages-overview.jpg", // Update this path to an appropriate image for the packages page
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Detailing Packages | Nashville Car Detail",
    description: "Explore our detailing packages to find the perfect service for your vehicle. Interior, exterior, and full detailing options available.",
    images: "/images/packages-overview.jpg", // Update this path to an appropriate image for the packages page
  },
};

export default function PackagesPage() {
    return <Packages />
}