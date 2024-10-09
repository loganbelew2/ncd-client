import Script from "next/script";

export const GoogleTag = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1WTWCDQGR9" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1WTWCDQGR9');
        `}
      </Script>
    </>
 );
}