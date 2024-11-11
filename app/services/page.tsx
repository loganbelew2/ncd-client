import { Metadata } from "next";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import ContactUs from "../components/Forms/ContactUs";

export const metadata: Metadata = {
  title: "Nashville Car Detail - Car Detailing Services Nashville",
  description:
    "Explore Nashville Car Detail's premium car detailing services, including Full Detailing, Interior Detailing, and Exterior Detailing. Book now for a fresh and shiny ride!" ,
  keywords:
    "Nashville car detailing, car detail services, full car detail, interior car detail, exterior car detail, auto detailing, mobile car detail Nashville",
  openGraph: {
    title: "Nashville Car Detail - Car Detailing Services in Nashville",
    description:
      "Our professional mobile detailing services cover Full Detail, Interior Detail, and Exterior Detail. Book your car detailing service today.",
    url: "https://nashvillecardetail.com/services",
    type: "website",
    images: [
      {
        url: "https://nashvillecardetail.com/images/car-detailing-services.jpg",
        alt: "Nashville Car Detailing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville Car Detail - Car Detailing Services",
    description:
      "Get the best mobile car detailing services in Nashville, including Full, Interior, and Exterior Detail packages. Contact us to book today!",
    images: [
      {
        url: "https://nashvillecardetail.com/images/car-detailing-services.jpg",
        alt: "Nashville Car Detailing Services",
      },
    ],
  },
  alternates: {
    canonical: "https://nashvillecardetail.com/services",
  },
};
export default function ServicesPage() {
  return (
    <>
      <Services />
      <Process />
    </>
  );
}
