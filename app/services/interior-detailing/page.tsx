import ContactUs from "@/app/components/Forms/ContactUs";
import LocationsLearn from "@/app/components/Locations/LocationsLearn/LocationsLearn";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import InteriorService from "@/app/components/Services/Interior-Service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Interior Detailing Near Me | Nashville Car Detail",
  description:
    "Find top-quality vehicle interior detailing near you in Nashville. Nashville Car Detail offers premium mobile interior detailing services to refresh and protect your car’s interior.",
  keywords:
    "vehicle interior detailing near me, Nashville car detailing, interior auto detailing near me, mobile detailing Nashville, car interior cleaning, upholstery cleaning, interior detailing Nashville TN",
  openGraph: {
    title: "Vehicle Interior Detailing Near Me | Nashville Car Detail",
    description:
      "Professional interior detailing in Nashville, TN. Refresh your vehicle's interior with our expert mobile services.",
    type: "article",
    url: "https://nashvillecardetail.com/interior-detailing",
    images: "/images/interior-detailing.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Vehicle Interior Detailing Near Me | Nashville Car Detail",
    description:
      "Professional interior detailing services to make your car feel like new.",
    images: "/images/interior-detailing.jpg",
  },
};

function InteriorDetail() {
  return (
    <>
      <InteriorService />
      <Process />
      <Packages />
      <LocationsLearn />
    </>
  );
}

export default InteriorDetail;
