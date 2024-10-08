import Home from "./components/Home/Home";
import { Viewport, Metadata } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  title: "Nashville Car Detail - Premium Mobile Auto Detailing",
  description:
    "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
  keywords:
    "Nashville car detailing, mobile car detailing, auto detailing, car cleaning services, car waxing, Nashville auto detailing, car detail",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Nashville Car Detail - Premium Mobile Auto Detailing",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    type: "website",
    url: "https://www.nashvillecardetail.com",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Nashville Car Detail - Premium Mobile Auto Detailing",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function Page() {
  return <Home></Home>;
}
