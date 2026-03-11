const testimonial = {
  name: 'testimonial',
  title: 'Kundenstimme',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'Ort', type: 'string' },
    { name: 'quote', title: 'Zitat', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Foto', type: 'image' },
    { name: 'rating', title: 'Bewertung (1-5)', type: 'number', validation: (Rule: any) => Rule.required().min(1).max(5) },
  ],
};

export default testimonial;
