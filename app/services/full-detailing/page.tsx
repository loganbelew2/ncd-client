import FullService from "@/app/components/Services/Full-Service";
import { Packages } from "@/app/components/Packages/Packages";
import Process from "@/app/components/Process/Process";
import LocationsLearn from "@/app/components/Locations/LocationsLearn/LocationsLearn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Vehicle Detailing Near Me | Nashville Car Detail",
  description:
    "Nashville Car Detail offers premium full vehicle detailing services, providing a complete transformation for your car, inside and out. Book our expert mobile detailing team today!",
  keywords:
    "full vehicle detailing near me, full car detailing Nashville, auto detailing Nashville, mobile car detailing, exterior and interior detailing Nashville, complete vehicle cleaning",
  openGraph: {
    title: "Full Vehicle Detailing Near Me | Nashville Car Detail",
    description:
      "Transform your car with our full vehicle detailing services in Nashville, TN. Book our premium mobile services today!",
    type: "article",
    url: "https://www.nashvillecardetail.com/full-detailing",
    images: "/images/full-detailing.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Full Vehicle Detailing Near Me | Nashville Car Detail",
    description:
      "Get a complete car makeover with full vehicle detailing services from Nashville Car Detail.",
    images: "/images/full-detailing.jpg",
  },
};

function FullDetail() {
  return (
    <>
      <FullService />
      <Process />
      <Packages />
      <LocationsLearn />
    </>
  );
}

export default FullDetail;
