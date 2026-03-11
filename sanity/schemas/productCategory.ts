const productCategory = {
  name: 'productCategory',
  title: 'Produktkategorie',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 4 },
    { name: 'shortDescription', title: 'Kurzbeschreibung', type: 'string' },
    { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] },
    { name: 'icon', title: 'Icon Name (Lucide)', type: 'string' },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text', rows: 3 },
  ],
  orderings: [{ title: 'Reihenfolge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};

export default productCategory;
