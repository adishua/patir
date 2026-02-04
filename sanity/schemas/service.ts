export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'longDescription',
      type: 'text',
      title: 'Long Description',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., FolderArchive, HeartHandshake)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Content',
      description: 'Rich text content for the service detail page',
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'SEO meta description',
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Keywords',
      description: 'SEO keywords',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which the service appears',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
