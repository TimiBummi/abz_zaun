const product = {
  name: 'product',
  title: 'Produkt',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'category', title: 'Kategorie', type: 'reference', to: [{ type: 'productCategory' }], validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 6 },
    { name: 'features', title: 'Eigenschaften', type: 'array', of: [{ type: 'string' }] },
    { name: 'images', title: 'Bilder', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] }] },
    { name: 'specifications', title: 'Spezifikationen', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'value', title: 'Wert', type: 'string' }] }] },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
  ],
};

export default product;
