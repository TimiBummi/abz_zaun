const faq = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Frage', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'answer', title: 'Antwort', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
    { name: 'category', title: 'Kategorie', type: 'string', options: { list: ['Allgemein', 'Zäune', 'Tore', 'Sichtschutz', 'Gabionen', 'Montage', 'Preise'] } },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
  ],
};

export default faq;
