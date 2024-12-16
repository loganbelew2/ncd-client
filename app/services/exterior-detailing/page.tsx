import ContactUs from "@/app/components/Forms/ContactUs";
import LocationsLearn from "@/app/components/Locations/LocationsLearn/LocationsLearn";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import ExteriorService from "@/app/components/Services/Exterior-Service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Detailing Services | Wash and Wax - Nashville Car Detail",
  description:
    "Discover Nashville Car Detail's top-notch exterior detailing services. We bring the shine back to your vehicle with our expert care.",
  keywords:
    "Nashville exterior auto detailing, car wash, vehicle waxing, auto detailing, exterior detailing",
  openGraph: {
    title: "Exterior Detailing Services | Nashville Car Detail",
    description:
      "Top-notch exterior detailing services to bring the shine back to your vehicle.",
    type: "article",
    url: "https://nashvillecardetail.com/exterior-detailing",
    images: "/images/exterior-detailing.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Exterior Detailing Services | Nashville Car Detail",
    description:
      "Top-notch exterior detailing services to bring the shine back to your vehicle.",
    images: "/images/exterior-detailing.jpg",
  },
};
function ExteriorDetail() {
  return (
    <>
      <ExteriorService />
      <Process />
      <Packages />
      <LocationsLearn/>
    </>
  );
}
export default ExteriorDetail;
