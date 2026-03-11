const reference = {
  name: 'reference',
  title: 'Referenz',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 4 },
    { name: 'location', title: 'Ort', type: 'string' },
    { name: 'category', title: 'Kategorie', type: 'string' },
    { name: 'beforeImage', title: 'Vorher-Bild', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'afterImage', title: 'Nachher-Bild', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'galleryImages', title: 'Galerie', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] }] },
    { name: 'completedAt', title: 'Fertiggestellt am', type: 'date' },
    { name: 'featured', title: 'Hervorgehoben', type: 'boolean', initialValue: false },
  ],
};

export default reference;
