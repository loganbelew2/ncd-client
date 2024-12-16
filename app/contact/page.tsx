import { Metadata } from "next";
import ContactUs from "../components/Forms/ContactUs";


export const metadata: Metadata = {
    title: "Contact Us | Nashville Car Detail",
    description: "Get in touch with Nashville Car Detail for all your car detailing needs. We're here to help with any questions or bookings.",
    keywords: "Nashville car detailing contact, car detail inquiries, schedule car detailing Nashville, Nashville auto detailing support",
    openGraph: {
      title: "Contact Us | Nashville Car Detail",
      description: "Reach out to Nashville Car Detail for expert car detailing services. We're happy to answer your questions or assist with your booking.",
      type: "website",
      url: "https://nashvillecardetail.com/contact",
    },
    twitter: {
      card: "summary_large_image",
      site: "@NashvilleCarDetail",
      title: "Contact Us | Nashville Car Detail",
      description: "Reach out to Nashville Car Detail for expert car detailing services. We're happy to answer your questions or assist with your booking.",
    },
  };
  

export default function ContactPage() {
    return (
        <ContactUs />
    )
}