const page = {
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'content', title: 'Inhalt', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] }] },
    { name: 'seoTitle', title: 'SEO Titel', type: 'string' },
    { name: 'seoDescription', title: 'SEO Beschreibung', type: 'text', rows: 3 },
  ],
};

export default page;
