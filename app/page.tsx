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
    title:
      "Mobile Car Detailing Near Me | Auto Detailing Services in Nashville",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    type: "website",
    url: "https://www.nashvillecardetail.com",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title:
      "Mobile Car Detailing Near Me | Auto Detailing Services in Nashville",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    images: "/images/NCD_Logo_White_BG.jpg",
  },
  other: {
    jsonLd: `
    {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Nashville Car Detail",
  "logo": "https://www.nashvillecardetail.com/images/NCD_Logo_White_BG.jpg",
  "image": [
  "https://www.nashvillecardetail.com/images/schemainterior.jpeg",
  "https://www.nashvillecardetail.com/images/schemaredcar.jpeg"
  "https://www.nashvillecardetail.com/images/interiorschema.jpeg",
  ],
  "url": "https://www.nashvillecardetail.com",
  "telephone": "+1-615-927-1987",
  "openingHours": "Mo-Fr 07:00-19:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "2"
  },
  "serviceArea": [
    {
      "@type": "Place",
      "name": "Brentwood, TN"
    },
    {
      "@type": "Place",
      "name": "Franklin, TN"
    },
    {
      "@type": "Place",
      "name": "Mt. Juliet, TN"
    },
    {
      "@type": "Place",
      "name": "Murfreesboro, TN"
    },
    {
      "@type": "Place",
      "name": "Nashville, TN"
    },
    {
      "@type": "Place",
      "name": "Gallatin, TN"
    },
    {
      "@type": "Place",
      "name": "Hendersonville, TN"
    },
    {
      "@type": "Place",
      "name": "Lebanon, TN"
    },
    {
      "@type": "Place",
      "name": "Smyrna, TN"
    },
    {
      "@type": "Place",
      "name": "Spring Hill, TN"
    }
  ]
}

    `,
  },
};

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
