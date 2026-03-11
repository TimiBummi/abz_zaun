const siteSettings = {
  name: 'siteSettings',
  title: 'Seiteneinstellungen',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Firmenname', type: 'string' },
    { name: 'phone', title: 'Telefon', type: 'string' },
    { name: 'email', title: 'E-Mail', type: 'string' },
    { name: 'address', title: 'Adresse', type: 'string' },
    { name: 'city', title: 'Stadt', type: 'string' },
    { name: 'postalCode', title: 'Postleitzahl', type: 'string' },
    { name: 'openingHours', title: 'Öffnungszeiten', type: 'string' },
    { name: 'whatsappNumber', title: 'WhatsApp Nummer', type: 'string' },
    { name: 'shopUrl', title: 'Shop URL', type: 'url' },
    { name: 'partnerLogos', title: 'Partner Logos', type: 'array', of: [{ type: 'image', fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] }] },
    { name: 'stats', title: 'Statistiken', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'value', title: 'Wert', type: 'string' }] }] },
  ],
};

export default siteSettings;
