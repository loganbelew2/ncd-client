import { Metadata } from "next";
import ContactUs from "../components/Forms/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us - Nashville Car Detail",
  description: "Get in touch with Nashville Car Detail for all your mobile car detailing needs. We're ready to answer your questions and book your appointment today!",
  keywords: "Nashville car detailing contact, mobile car detailing Nashville, auto detailing questions, book detailing services, car detailing inquiry",
  openGraph: {
    title: "Contact Us - Nashville Car Detail",
    description: "Reach out to Nashville Car Detail for any inquiries about our mobile detailing services. We're happy to assist you with booking and any questions.",
    url: "https://nashvillecardetail.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://nashvillecardetail.com/images/contact-us-banner.jpg",
        alt: "Contact Nashville Car Detail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Nashville Car Detail",
    description: "Have questions or need to book a detailing service? Contact Nashville Car Detail and we'll be happy to assist.",
    images: [
      {
        url: "https://nashvillecardetail.com/images/contact-us-banner.jpg",
        alt: "Contact Nashville Car Detail",
      },
    ],
  },
  alternates: {
    canonical: "https://nashvillecardetail.com/contact-us",
  },
};

export default function Page() {
    return (
        <ContactUs/>
    )
}