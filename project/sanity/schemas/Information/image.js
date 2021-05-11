export default {
    name: 'galleri',
    title: 'Images for Galleri',
    type: 'document',
    fields: [
      {
        name: 'galleriImage',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true
        },    
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        options: {
            isHighlighted: true
          }
      },
      {
        name: 'galleriImageAlt',
        title: 'Alternative text',
        type: 'string',
        description: 'Important for SEO & Universal design',
      },
    ],
    preview: {
      select: {
        title: 'caption',
        media: 'galleriImage',
      }
    }
  }