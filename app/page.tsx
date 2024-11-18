import Home from "./components/Home/Home";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Mobile Detailing Nashville, TN | Car Detailing Near Me",
  description:
    "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
  keywords:
    "Nashville car detailing, mobile car detailing, auto detailing, car cleaning services, car waxing, Nashville auto detailing, car detail",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile Car Detailing Near Me | Auto Detailing Services in Nashville",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    type: "website",
    url: "https://www.nashvillecardetail.com",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Mobile Car Detailing Near Me | Auto Detailing Services in Nashville",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function Page() {
  return (
    <>
      <Head>
        {/* LocalBusiness Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              "name": "Nashville Car Detail",
              "image": "https://www.nashvillecardetail.com/images/NCDLogoTransBig.png",
              "url": "https://www.nashvillecardetail.com",
              "telephone": "+1-615-927-1987",
              "openingHours": "Mo-Fr 07:00-19:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "2"
              }
            }),
          }}
        />
      </Head>
      <Home />
    </>
  );
}
