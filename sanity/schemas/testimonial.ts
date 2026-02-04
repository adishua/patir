export const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      type: 'text',
      title: 'Testimonial Content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating out of 5',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Show on homepage',
      initialValue: false,
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which the testimonial appears',
    },
  ],
  orderings: [
    {
      title: 'Date, Newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
