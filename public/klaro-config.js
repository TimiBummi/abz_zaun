var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/datenschutz',
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  lang: 'de',
  translations: {
    de: {
      consentNotice: {
        description: 'Wir verwenden Cookies und ähnliche Technologien, um Ihnen den bestmöglichen Service zu bieten. Einige sind notwendig, andere helfen uns, die Website zu verbessern.',
      },
      acceptAll: 'Alle akzeptieren',
      declineAll: 'Alle ablehnen',
      acceptSelected: 'Auswahl bestätigen',
      close: 'Schließen',
      purposes: {
        analytics: 'Statistiken',
        maps: 'Karten',
      },
    },
  },
  services: [
    {
      name: 'matomo',
      title: 'Matomo Analytics',
      purposes: ['analytics'],
      cookies: [/^_pk_/, 'matomo_session'],
      default: false,
      required: false,
    },
    {
      name: 'google-maps',
      title: 'Google Maps',
      purposes: ['maps'],
      default: false,
      required: false,
    },
  ],
};
