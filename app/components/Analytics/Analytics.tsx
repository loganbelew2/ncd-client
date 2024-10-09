// app/components/Analytics.tsx
import React from 'react';
import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-BJ94CG1CCE`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BJ94CG1CCE');
        `}
      </Script>
    </>
  );
};

export default Analytics;
