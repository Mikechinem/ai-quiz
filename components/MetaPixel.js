"use client";

import Script from "next/script";

const MetaPixel = () => {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <Script id="fb-pixel-init" strategy="afterInteractive">
        {`
          window.fbq = window.fbq || function(){
            window.fbq.callMethod ?
            window.fbq.callMethod.apply(window.fbq, arguments) :
            window.fbq.queue.push(arguments)
          };
          if(!window._fbq) window._fbq = window.fbq;
          window.fbq.push = window.fbq;
          window.fbq.loaded = true;
          window.fbq.version = '2.0';
          window.fbq.queue = [];
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
};

export default MetaPixel;
