'use client';

import Script from 'next/script';

// Replace MATOMO_URL and SITE_ID with actual values once Matomo is installed on All-Inkl.
// The data-name="matomo" attribute lets Klaro gate this script behind consent.
export default function MatomoAnalytics() {
  return (
    <Script
      id="matomo"
      data-name="matomo"
      type="text/plain"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://analytics.abz-zaun.de/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  );
}
