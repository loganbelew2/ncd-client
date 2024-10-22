import ContactUs from "@/app/components/Forms/ContactUs";
import Process from "@/app/components/Process/Process";
import InteriorService from "@/app/components/Services/Interior-Service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Interior Detailing Services | Deep Clean & Refresh - Nashville Car Detail",
  description:
    "Experience the best in interior detailing with Nashville Car Detail. Our deep cleaning services refresh and protect your vehicle's interior.",
  keywords:
    "Nashville interior auto detailing, car interior cleaning, deep clean, upholstery cleaning, interior detailing",
  openGraph: {
    title: "Interior Detailing Services | Nashville Car Detail",
    description:
      "Expert interior detailing services to refresh and protect your vehicle's interior.",
    type: "article",
    url: "https://www.nashvillecardetail.com/interior-detailing",
    images: "/images/interior-detailing.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Interior Detailing Services | Nashville Car Detail",
    description:
      "Expert interior detailing services to refresh and protect your vehicle's interior.",
    images: "/images/interior-detailing.jpg",
  },
};

function InteriorDetail() {
  return (
    <>
      <InteriorService />
      <Process />
      <ContactUs />
    </>
  );
}
export default InteriorDetail;
