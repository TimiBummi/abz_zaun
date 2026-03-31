'use client';

import Script from 'next/script';

export default function CookieConsent() {
  return (
    <>
      <link rel="stylesheet" href="/klaro.min.css" />
      <Script src="/klaro-config.js" strategy="beforeInteractive" />
      <Script
        src="/klaro.js"
        strategy="beforeInteractive"
        data-config="klaroConfig"
      />
    </>
  );
}
